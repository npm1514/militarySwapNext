'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { defaultUser, listOfTestUsers } from '../data/listOfTestUsers';
import {
	Button,
	Modal,
	ModalContent,
	Pagination,
	useDisclosure,
} from '@nextui-org/react';
import NextImage from 'next/image';
import { titleToLink } from '@/util/funcs';

const ListingPage = ({ listing, isPreview, goBack, createListing }) => {
	const images = listing.images;
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [seller, setSeller] = useState(defaultUser);
	const [imgsGood, setImgsGood] = useState(true);
	const [imageSelection, setImageSelection] = useState(1);

	const blowUpImage = (index) => {
		setImageSelection(index);
		onOpen();
	};

	useEffect(() => {
		const sellerInfo = listOfTestUsers.find((a) => a.id == listing.contactId);
		if (sellerInfo) {
			setSeller(sellerInfo);
		}
	}, [listing.contactId]);

	useEffect(() => {
		images?.map((src) => {
			var img = new Image();
			img.onload = () => {};
			img.onerror = () => {
				setImgsGood(false);
			};
			img.src = src;
		});
	}, [images]);

	const imageSlider = () => {
		return (
			<div className='flex flex-col gap-4 md:h-[80vh]'>
				{images?.length && imgsGood ? (
					<NextImage
						height='500'
						width='500'
						alt='listing image'
						src={images?.[imageSelection - 1]}
						className='object-cover hover:cursor-pointer w-full max-w-[100vw] rounded-3xl'
						onClick={() => blowUpImage(imageSelection)}
						style={{ height: 'calc(100% - 52px)' }}
					/>
				) : null}
				{images?.length && !imgsGood ? (
					<NextImage
						height='500'
						width='500'
						alt='listing image'
						src={URL.createObjectURL(images?.[imageSelection - 1])}
						className='object-cover hover:cursor-pointer w-full max-w-[100vw] rounded-3xl'
						onClick={() => blowUpImage(imageSelection)}
						style={{ height: 'calc(100% - 52px)' }}
					/>
				) : null}
				{images?.length > 1 ? (
					<Pagination
						total={images?.length}
						page={imageSelection}
						onChange={(val) => setImageSelection(val)}
					/>
				) : null}
			</div>
		);
	};

	const categoryLink = titleToLink(listing.category);
	return (
		<>
			<div className='flex flex-col gap-4'>
				<h3 className='mt-4'>
					<Link className='text-blue' href={`/${categoryLink}`}>
						{listing.category}
					</Link>
					:{' '}
					<Link
						className='text-blue'
						href={`/${categoryLink}?subcategory=${titleToLink(
							listing.subcategory,
						)}`}
					>
						{listing.subcategory}
					</Link>
				</h3>
				<h3 className='md:hidden'>{listing.title}</h3>
				<div className='w-full flex flex-col md:flex-row gap-8'>
					{images ? (
						<div className='hidden md:flex w-2/3 flex-col gap-2'>
							{imgsGood &&
								images?.map((image, index) => (
									<NextImage
										height='500'
										width='500'
										src={image}
										key={index}
										alt='listing image'
										className='w-full object-cover hover:cursor-pointer rounded-3xl'
										onClick={() => blowUpImage(index + 1)}
									/>
								))}
							{!imgsGood &&
								images?.map((image, index) => (
									<NextImage
										height='500'
										width='500'
										src={URL.createObjectURL(image)}
										key={index}
										alt='listing image'
										className='w-full object-cover hover:cursor-pointer rounded-3xl'
										onClick={() => blowUpImage(index + 1)}
									/>
								))}
						</div>
					) : null}
					<div className='block w-full md:hidden md:h-[500px]'>
						{imageSlider()}
					</div>
					<div className='w-1/3 flex flex-col gap-8'>
						<div className='flex flex-col gap-2'>
							<h3 className='hidden md:block'>{listing.title} </h3>
							{listing.price && <h5> Price: ${listing.price} </h5>}
							<h5> Description: {listing.description} </h5>
							{listing.condition && <h5> Condition: {listing.condition} </h5>}
							<h5> Posted on {listing.datePosted} </h5>
						</div>
						<div className='flex flex-col gap-2'>
							<h3>Seller Info </h3>
							<h5>Name: {seller.name} </h5>
							<h5>Branch: {seller.branch} </h5>
							<h5>
								Email:{' '}
								<a className='text-blue' href={`mailto:${seller.email}`}>
									{seller.email}
								</a>
							</h5>
							<h5>
								Phone:{' '}
								<a className='text-blue' href={`tel:+1${seller.phone}`}>
									{seller.phone}
								</a>
							</h5>
						</div>
						{isPreview && (
							<div className='flex flex-col gap-4'>
								<Button color='warning' onPress={goBack}>Edit</Button>
								<Button color="success" onPress={createListing}>Create Listing</Button>
							</div>
						)}
					</div>
				</div>
			</div>

			<Modal
				isOpen={isOpen}
				size='5xl'
				onOpenChange={onOpenChange}
				classNames={{
					wrapper: 'items-center hidden md:flex',
					backdrop: 'hidden md:block',
					closeButton:
						'top-0 right-0 hover:bg-transparent hover:text-black active:bg-transparent',
				}}
			>
				<ModalContent>
					{() => <div className='p-4 m-auto w-full'>{imageSlider()}</div>}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ListingPage;
