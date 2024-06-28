import Card from '@/components/Card';
import listOfTestListings from '@/data/listOfTestListings';
export default function Category() {
	return (
		<div className='w-full h-full'>
			<h3>this is the category list of listings page</h3>
			<div className='flex w-full h-full gap-4 flex-wrap items-start'>
				{listOfTestListings.map((listing, index) => (
					<Card key={listing.title + index} {...listing} />
				))}
			</div>
		</div>
	);
}
