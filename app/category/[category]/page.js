'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { ListingCard } from '../../components';
import { listOfTestListings } from '../../data/listOfTestListings';
import listOfCategories from '../../data/listOfCategories';

const Category = () => {
	const [listOfListings, setListOfListings] = useState([]);
	const { category } = useParams();
	const searchParams = useSearchParams();
	const subcategory = searchParams.get('subcategory');

	const categoryObj = listOfCategories.find((a) => a.link == category);

	useEffect(() => {
		// get listings by categories
		setListOfListings(listOfTestListings);
	}, []);

	return (
		<div className='w-full h-full flex flex-col gap-2'>
			<h2>{categoryObj.category}</h2>
			<h3>add some filters like subcategory: {subcategory}</h3>
			<h3>these listings would then be filtered</h3>
			<div className='flex w-full h-full gap-4 flex-wrap items-start justify-stretch'>
				{listOfListings.map((listing, index) => (
					<ListingCard
						key={listing.title + index}
						{...listing}
						className='grow w-full sm:w-1/3 sm:max-w-[50%] md:w-1/4 md:max-w-[33%]'
					/>
				))}
			</div>
		</div>
	);
};

export default Category;
