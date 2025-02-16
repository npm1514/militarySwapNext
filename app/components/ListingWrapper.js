'use client';
import { useEffect, useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import {
	defaultListing,
	listOfTestListings,
} from '@/data/listOfTestListings';
import ListingPage from '@/components/ListingPage';

const getListing = (listingId) => listOfTestListings.find((a) => a.id == listingId)

const ListingWrapper = () => {
	const { listingId } = useParams();
	const [listing, setListing] = useState(getListing() || defaultListing);

	useEffect(() => {
		const pageListing = getListing(listingId);
		if(pageListing){
			setListing(pageListing);
		} else {
			redirect("/not-found");
		}
	}, [listingId]);

	return <ListingPage listing={listing} />;
};
export default ListingWrapper;
