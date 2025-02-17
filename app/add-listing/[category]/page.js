'use client';
import Image from 'next/image';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useParams, redirect } from 'next/navigation';
import { Select, SelectItem, Button, Input, Textarea } from '@nextui-org/react';

import { ListingPage } from '@/components';
import {
	defaultListingByCategory,
	propsByCategory,
} from '@/data/categoryProps';
import { linkToTitle } from '@/util/funcs';
import { X } from '@phosphor-icons/react';
import classNames from 'classnames';

const ListingByType = () => {
	const fileRef = useRef(null);
	const { category } = useParams();
	const [showPreview, setShowPreview] = useState(false);
	const [listing, setListing] = useState({
		...defaultListingByCategory[category],
	});

	const listingImages = useMemo(() =>
		listing['images'].map((val, i) => (
			<div className='flex relative' key={i}>
				<Image
					src={URL.createObjectURL(val)}
					height='100'
					width='100'
					alt='image preview'
					className='w-auto h-auto'
				/>
				<X
					size={16}
					onClick={() => removeFile('images', i)}
					weight='bold'
					className='z-10 absolute right-2 top-2 hover:text-blue hover:cursor-pointer'
				/>
			</div>
		)), []
	);

	const goToPreview = (e) => {
		e.preventDefault();
		setShowPreview(true);
	};

	const refClick = () => {
		if (fileRef.current) {
			fileRef.current.click();
		}
	};

	const selectImages = (e, prop) => {
		const efiles = e.target.files;
		if (efiles?.length) {
			const files = Array.from(efiles);
			let newList = [...files];
			if (listing[prop].length) {
				newList = [...newList, ...listing[prop]];
			}
			changeProp(prop, newList);
		}
	};

	const removeFile = (prop, index) => {
		const newFileList = [...listing[prop]];
		newFileList.splice(index, 1);
		changeProp(prop, newFileList);
	};

	const createListing = () => {
		alert('create listing');
		redirect('/profile');
	};

	const changeProp = (prop, val) => {
		const obj = {};
		obj[prop] = val;
		setListing({ ...listing, ...obj });
	};
	const inputElement = (categoryProp) => {
		const { prop, inputType, selections, multiple, required } = categoryProp;
		if (inputType == 'file') {
			return (
				<div className='flex flex-col gap-2'>
					<Input
						type='file'
						multiple
						hidden
						isClearable
						accept='image/*'
						isRequired={required}
						onClear={() => changeProp(prop, [])}
						ref={fileRef}
						onChange={(e) => selectImages(e, prop)}
						className='border p-2 rounded-lg hidden'
					/>
					<Button color='primary' onPress={refClick}>
						Select Images
					</Button>
					{listing[prop].length ? (
						<div className='flex flex-wrap gap-2 w-full'>{listingImages}</div>
					) : null}
				</div>
			);
		}
		if (inputType == 'selector') {
			return (
				<Select
					className='max-w-xs'
					selectionMode={multiple ? 'multiple' : 'single'}
					selectedKeys={[listing[prop]]}
					placeholder={`Select ${prop}`}
					aria-label={prop}
					isRequired={required}
					isClearable
					onClear={() => changeProp(prop, [])}
					onSelectionChange={({ currentKey }) => changeProp(prop, currentKey)}
				>
					{selections.map(({ key }) => (
						<SelectItem key={key}>{key}</SelectItem>
					))}
				</Select>
			);
		}
		if (inputType == 'textarea') {
			return (
				<Textarea
					aria-label={prop}
					placeholder={`Enter ${prop}`}
					value={listing[prop]}
					isRequired={required}
					onClear={() => changeProp(prop, [])}
					isClearable
					onValueChange={(val) => changeProp(prop, val)}
				/>
			);
		}

		return (
			<Input
				type={inputType}
				value={listing[prop]}
				placeholder={`Enter ${prop}`}
				aria-label={prop}
				isRequired={required}
				onClear={() => changeProp(prop, [])}
				isClearable
				startContent={prop == 'price' ? '$' : ''}
				onValueChange={(val) => changeProp(prop, val)}
			/>
		);
	};

	useEffect(() => {
		setListing({
			...listing,
			creatorId: 123456,
			category: linkToTitle(category),
		});
	}, [category, listing]);

	return (
		<div
			className={classNames(
				'flex flex-col gap-4 items-center w-full m-auto',
				showPreview ? 'max-w-[1000px]' : 'max-w-[500px]',
			)}
		>
			<h2>Add a New {linkToTitle(category)} Listing</h2>
			{showPreview ? (
				<div className='flex flex-col gap-4'>
					<h3>Preview</h3>
					<ListingPage
						listing={listing}
						isPreview
						goBack={() => showPreview(false)}
						createListing={createListing}
					/>
					<Button color='warning' onPress={() => setShowPreview(false)}>
						Edit
					</Button>
					<Button color='success' onPress={createListing}>
						Create Listing
					</Button>
				</div>
			) : (
				<form onSubmit={goToPreview} className='flex flex-col gap-6 w-full'>
					<div className='flex flex-col gap-2'>
						{listing['images']?.length ? (
							<Button type='submit' color='success' cl>
								Preview
							</Button>
						) : null}
						{propsByCategory[category].map((categoryProp, index) => {
							return (
								<div className='flex flex-col' key={index}>
									<h5 className='w-max'>{categoryProp.label}</h5>
									{inputElement(categoryProp)}
								</div>
							);
						})}
					</div>
					<Button type='submit' color='success'>
						Preview
					</Button>
				</form>
			)}
		</div>
	);
};

export default ListingByType;
