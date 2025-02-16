'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='text-center flex flex-col gap-4 mt-16'>
			<h3>Page AWOL</h3>
			<Link href='/'>
				<Button color='primary'>Go Home</Button>
			</Link>
		</div>
	);
}
