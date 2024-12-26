'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { listOfTestListings, defaultListing } from '@/data/listOfTestListings';
import { defaultUser, listOfTestUsers } from '@/data/listOfTestUsers';
import {
	Modal,
	ModalContent,
	Pagination,
	useDisclosure,
} from '@nextui-org/react';

const Listing = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { listingId } = useParams();
	const [listing, setListing] = useState(defaultListing);
	const [seller, setSeller] = useState(defaultUser);
	const [imageSelection, setImageSelection] = useState(1);

	const blowUpImage = (index) => {
		setImageSelection(index);
		onOpen();
	};

	useEffect(() => {
		// get specific listing
		const pageListing = listOfTestListings.find((a) => a.id == listingId);
		setListing(pageListing);
		const sellerInfo = listOfTestUsers.find(
			(a) => a.id == pageListing.contactId,
		);
		setSeller(sellerInfo);
	}, []);

	const { images } = listing;

	const imageSlider = (
		<div>
			{images.length ? (
				<img
					src={images?.[imageSelection - 1]}
					className='object-cover hover:cursor-pointer w-full max-h-[100vh] max-w-[100vw]'
					onClick={() => blowUpImage(imageSelection)}
				/>
			) : null}
			{images.length > 1 ? (
				<Pagination
					total={images?.length}
					page={imageSelection}
					onChange={(val) => setImageSelection(val)}
				/>
			) : null}
		</div>
	);

	return (
		<>
			<div>
				<h3 className='my-4'>
					Category:{' '}
					<Link href={`/${listing.category}`}> {listing.category} </Link>
				</h3>
				<div className='w-full flex flex-col md:flex-row gap-8'>
					<div className='hidden md:flex w-2/3 flex-col gap-2'>
						{images?.map((image, index) => (
							<img
								src={image}
								key={index}
								className='h-[500px] object-cover hover:cursor-pointer'
								onClick={() => blowUpImage(index + 1)}
							/>
						))}
					</div>
					<div className='block w-full md:hidden h-[500px]'>{imageSlider}</div>
					<div className='w-1/3 flex flex-col gap-8'>
						<div className='flex flex-col gap-2'>
							<h3>{listing.title} </h3>
							<h5> Price: ${listing.price} </h5>
							<h5> Description: {listing.description} </h5>
							<h5> Condition: {listing.condition} </h5>
							<h5> Posted on {listing.timePosted} </h5>
						</div>
						<div className='flex flex-col gap-2'>
							<h3>Seller Info </h3>
							<h5> Name: {seller.name} </h5>
							<h5> Branch: {seller.branch} </h5>
							<h5> Email: {seller.email} </h5>
							<h5> Phone: {seller.phone} </h5>
						</div>
					</div>
				</div>
			</div>

			<Modal
				isOpen={isOpen}
				size='5xl'
				onOpenChange={onOpenChange}
				classNames={{
					wrapper: 'items-center hidden md:block',
					backdrop: 'hidden md:block'
				}}
			>
				<ModalContent>
					{() => (
						<div className='p-4 m-auto w-full'>
							{imageSlider}
						</div>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
export default Listing;
