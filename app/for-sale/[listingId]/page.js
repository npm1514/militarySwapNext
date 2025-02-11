'use client';
import { useEffect, useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import {
	listOfTestListings,
	defaultListing,
} from '../../data/listOfTestListings';
import ListingPage from '../../components/ListingPage';

const Listing = () => {
	const { listingId } = useParams();
	const [listing, setListing] = useState(defaultListing);

	useEffect(() => {
		console.log(listingId)
		const pageListing = listOfTestListings.find((a) => a.id == listingId);
		if (pageListing) {
			setListing(pageListing);
		} else {
			// redirect('/not-found');
		}
	}, [listingId]);

	return <ListingPage listing={listing} />;
};
export default Listing;
