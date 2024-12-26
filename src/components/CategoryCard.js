'use client';

import classNames from 'classnames';
import Link from 'next/link';

const CategoryCard = ({ className, category, subcategories, image }) => {
	return (
		<div
			className={classNames(
				'w-60 border rounded group hover:border-blue-600',
				className,
			)}
		>
			<Link href={`/${category}`}>
				{/* fix this */}
				<div className='group-hover:bg-blue-600'>
					<div className='h-36 w-full relative'>
						<img className='h-full w-full object-cover rounded-t' src={image} />
						<h5 className='top-2 left-2 absolute bg-white rounded-md border border-gray-300 p-1'>
							{category}
						</h5>
					</div>
					<h3 className='border-b py-4 group-hover:text-white'>{category}</h3>
				</div>
			</Link>
			<div className='w-full flex flex-col justify-between p-2'>
				<h5>Subcategories Included</h5>
				{subcategories.map((subcategory) => (
					<Link href={`/${category}?subcategory=${subcategory}`} className='hover:text-blue-700 hover:bg-gray-50'>
						{subcategory}
					</Link>
				))}
			</div>
		</div>
	);
};

export default CategoryCard;

// {/* <Link href={`/${category}/${id}`}>
// 				{/* fix this */}
// 				<div className='h-36 w-full relative'>
// 					<img className='h-full w-full object-cover' src={images?.[0]} />
// 					{price && (
// 						<h5 className='top-2 left-2 absolute bg-white rounded-md border border-gray-300 p-1'>
// 							${price}
// 						</h5>
// 					)}
// 				</div>
// 				<div className='h-12 w-full flex flex-col justify-between p-2 group-hover:text-white'>
// 					<h5>{title}</h5>
// 					<p>Posted: {timePosted}</p>
// 				</div>
// 			</Link> */}
