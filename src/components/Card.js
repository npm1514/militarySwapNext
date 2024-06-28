'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Card({ price, title, images, timePosted, id }) {
	const { category, location } = useParams();
	return (
		<div className='h-48 w-60 border rounded hover:bg-blue-600 hover:border-blue-600'>
			<Link href={`/${location}/${category}/${id}`}>
				{/* fix this */}
				<div className='h-36 w-full relative'>
					<img className='h-full w-full object-cover' src={images?.[0]} />
					<h5 className='top-2 left-2 absolute text-lime-600'>${price}</h5>
				</div>
				<div className='h-12 w-full flex flex-col justify-between p-2'>
					<h5>{title}</h5>
					<p>Posted: {timePosted}</p>
				</div>
			</Link>
		</div>
	);
}
