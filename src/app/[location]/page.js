'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import listOfCategories from '@/data/listOfCategories';

export default function Location() {
	const { location } = useParams();
	return (
		<div>
			<h3>this is the locations category list page</h3>
			<div>
				{Object.keys(listOfCategories).map((category, index) => (
					<>
						<Link href={`/${location}/${category}`} key={category + index}>
							<h5>{category}</h5>
						</Link>
						{/* fix this */}
						{listOfCategories[category].map((subcategory, index) => (
							<Link
								href={`/${location}/${subcategory}`}
								key={subcategory + index}
							>
								<p>{subcategory}</p>
							</Link>
						))}
					</>
				))}
			</div>
		</div>
	);
}
