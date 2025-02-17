'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { titleToLink } from '@/util/funcs';

import listOfCategories from '@/data/listOfCategories';

const AddListing = () => (
	<div className='flex flex-col gap-4 items-center'>
		<h2>Add a New Listing</h2>
		<div className='flex flex-col gap-4'>
			<h3>Pick the appropriate category for your listing</h3>
			{listOfCategories.map((categoryItem, index) => (
				<Link
					href={`/add-listing/${titleToLink(categoryItem.category)}`}
					className='w-max m-auto'
					key={index}
				>
					<Button color='primary'>{categoryItem.category}</Button>
				</Link>
			))}
		</div>
	</div>
);

export default AddListing;
