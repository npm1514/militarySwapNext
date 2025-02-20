'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List } from '@phosphor-icons/react';
import { Drawer, DrawerContent, useDisclosure } from '@nextui-org/react';
import classNames from 'classnames';
import Image from 'next/image';

const Header = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const pathname = usePathname();

	const clickMenu = () => {
		onOpen();
		console.log('click menu');
	};

	const menuContent = (menu) => {
		const linkStyle = menu
			? 'flex flex-col gap-8'
			: 'hidden sm:flex justify-between items-center';
		return (
			<div className='flex flex-col gap-4 p-4 border-b border-gray-500 h-full'>
				<div className='flex justify-between items-center gap-4'>
					<div className='flex gap-4 items-center'>
						<Link href='/'>
							<Image
								className='h-auto w-auto'
								height='60'
								width='60'
								src='/military-swap-logo.png'
								alt='site logo'
							/>
						</Link>
						<div className='norwester hidden sm:block'>
							<h1 className='text-blue leading-none'>Military Swap</h1>
							<h5>
								Buy from, Sell to, and Employ Active Duty and Veterans Only
							</h5>
						</div>
					</div>
					{!menu && (
						<List
							className='text-blue hover:cursor-pointer sm:hidden'
							size={32}
							weight='bold'
							onClick={clickMenu}
						/>
					)}
				</div>

				<div className={classNames('gap-2 text-blue', linkStyle)}>
					<div className='flex flex-col sm:flex-row gap-2'>
						<Link className='underline' href='/for-sale'>
							For Sale
						</Link>
						<Link className='underline' href='/vehicles'>
							Vehicles
						</Link>
						<Link className='underline' href='/real-estate'>
							Real Estate
						</Link>
						<Link className='underline' href='/jobs'>
							Jobs
						</Link>
					</div>
					<div className='flex flex-col sm:flex-row gap-2'>
						<Link className='underline' href='/add-listing'>
							Add Listing
						</Link>
						<Link className='underline' href='/profile'>
							Profile
						</Link>
					</div>
				</div>
			</div>
		);
	};

	return (
		<header>
			{menuContent(false)}
			<Drawer
				isOpen={isOpen}
				size='full'
				onOpenChange={onOpenChange}
				className='block sm:hidden'
			>
				<DrawerContent>{menuContent(true)}</DrawerContent>
			</Drawer>
		</header>
	);
};

export default Header;
