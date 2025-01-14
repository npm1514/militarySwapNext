"use client"
import { Button, Modal, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';

export default function Profile() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	return (
		<>
			<div className='pt-4 flex flex-col gap-4 items-center'>
				<div className='pt-4 flex flex-col gap-4 items-center'>
					<h2>Profile</h2>
					<h4>Name: Nick Marucci</h4>
					<h4>Email: npm1514@gmail.com</h4>
					<h4>Phone: 7164502362</h4>
				</div>

				<div className='pt-4 flex flex-col gap-4 items-center'>
					<Button className='text-blue p-4' color='success' onPress={onOpen}>
						<h3>Create New Listing</h3>
					</Button>
					<h2>My Listings</h2>
					{[0, 1, 2].map((_value, index) => (
						<Link
							key={index}
							href={`/for-sale/1234567`}
							className='text-blue underline'
						>
							<h4>Listing {index}</h4>
						</Link>
					))}
				</div>
			</div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        hello
      </Modal>
		</>
	);
}
