'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ListingCard } from '@/components';
import { listOfTestListings } from '@/data/listOfTestListings';
import listOfCategories from '@/data/listOfCategories';
import { Button, Spinner } from '@nextui-org/react';

const CategoryWrapper = ({ category }) => {
	const [listOfListings, setListOfListings] = useState(undefined);
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const subcategoryLink = searchParams.get('subcategory');

	useEffect(() => {
		const list = listOfTestListings.filter(
			(listing) => listing.category == category,
		);
		setListOfListings(list);
	}, [category]);

	const listOfSubcategories =
		listOfCategories.find((a) => a.category == category)?.subcategories || [];

	const updateSubcategory = (sub) => {
		const updatedSearchParams = new URLSearchParams();
		updatedSearchParams.set('subcategory', sub.link);
		router.push(pathname + '?' + updatedSearchParams.toString());
	};

	const clearSubcategory = () => {
		router.push(pathname);
	};

	const filteredListOfListings = subcategoryLink && listOfListings?.length
		? listOfListings.filter(
				(listing) => listing.subcategoryLink == subcategoryLink,
		  )
		: listOfListings;
	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<h2>{category}</h2>
			{filteredListOfListings?.length ? (
				<div className='w-full h-[40px]'>
					<div className='flex gap-2 overflow-x-scroll remove-scrollbar'>
						{listOfSubcategories.map((sub, i) => (
							<Button
								key={i}
								onPress={() => updateSubcategory(sub)}
								color='primary'
								variant={subcategoryLink == sub.link ? 'bordered' : 'solid'}
							>
								{sub.title}
							</Button>
						))}
					</div>
				</div>
			) : null}
			{subcategoryLink && (
				<Button
					onPress={clearSubcategory}
					color='danger'
					variant='bordered'
					className='w-max'
				>
					Clear Filters
				</Button>
			)}
			<div className='flex w-full h-full gap-4 flex-wrap items-start content-start justify-stretch'>
				{filteredListOfListings?.length ? (
					filteredListOfListings.map((listing, index) => (
						<ListingCard
							key={listing.title + index}
							{...listing}
							category='for-sale'
							className='grow w-full sm:w-1/3 sm:max-w-[50%] md:w-1/4 md:max-w-[33%]'
						/>
					))
				) : filteredListOfListings != undefined ? (
					<h3>
						Sorry! There are no {category} listings currently. Check back later.
					</h3>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default CategoryWrapper;
