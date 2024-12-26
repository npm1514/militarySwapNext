'use client';

import { useParams } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';

const ListingCard = ({
	price,
	title,
	images,
	timePosted,
	id,
	className,
}) => {
	const { category } = useParams();
	return (
		<div
			className={classNames(
				'group h-48 w-60 border rounded hover:bg-blue-600 hover:border-blue-600',
				className,
			)}
		>
			<Link href={`/${category}/${id}`}>
				{/* fix this */}
				<div className='h-36 w-full relative'>
					<img className='h-full w-full object-cover' src={images?.[0]} />
					{price && (
						<h5 className='top-2 left-2 absolute bg-white rounded-md border border-gray-300 p-1'>
							${price}
						</h5>
					)}
				</div>
				<div className='h-12 w-full flex flex-col justify-between p-2 group-hover:text-white'>
					<h5>{title}</h5>
					<p>Posted: {timePosted}</p>
				</div>
			</Link>
		</div>
	);
}

export default ListingCard;