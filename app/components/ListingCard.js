import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const ListingCard = ({ price, title, images, timePosted, id, className, category }) => {
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
					<Image
						className='h-full w-full object-cover'
						height='500'
						width='500'
						src={images?.[0]}
						alt='listing card image'
					/>
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
};

export default ListingCard;
