'use client';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useParams } from 'next/navigation';

import { propsByCategory } from '@/data/categoryProps';
import { redirect } from 'next/navigation';
import { ListingPage } from '@/components';
import { defaultListing } from '@/data/listOfTestListings';
import { linkToTitle } from '@/util/funcs';

const ListingByType = () => {
	const [showPreview, setShowPreview] = useState(false);
	const [listing, setListing] = useState(defaultListing);
	const { category } = useParams();
	const goToPreview = (e) => {
		e.preventDefault();
		setShowPreview(true);
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
	return (
		<div className='flex flex-col gap-4 items-center'>
			<h2>Add a New {linkToTitle(category)} Listing</h2>
			{showPreview ? (
				<div className='flex flex-col gap-4'>
					<h3>Preview</h3>
					<ListingPage listing={listing} />
					<Button onPress={() => setShowPreview(false)}>Edit</Button>
					<Button onPress={createListing}>Create Listing</Button>
				</div>
			) : (
				<form onSubmit={goToPreview} className='flex flex-col gap-2'>
					{propsByCategory[category].map(({label, prop, inputType}, index) => (
						<div className='flex flex-col' key={index}>
							<h5 className='w-max'>{label}</h5>
							<input
								type={inputType}
								value={listing[prop]}
								onChange={(e) => {
									changeProp(prop, e.target.value);
								}}
								className='border p-2 rounded-lg'
							/>
						</div>
					))}
					<Button type='submit'>Preview</Button>
				</form>
			)}
		</div>
	);
};

export default ListingByType;
