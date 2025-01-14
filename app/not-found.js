'use client';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-center flex flex-col gap-4 mt-4'>
			<h3>Page Not Found</h3>
			<Link href='/'>
				<h3>Go Home</h3>
			</Link>
		</div>
	);
}
