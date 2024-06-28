'use client';

import { useParams } from 'next/navigation';

export default function Listing() {
	const { listingId } = useParams();
	return (
		<div>
			<h3>this is the listing page for id: {listingId}</h3>
		</div>
	);
}
