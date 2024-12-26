import Link from 'next/link';

const Header = () => {
	return (
		<header className='p-4 border-b border-gray-500'>
			<Link href='/'>
				<h1 className=''>Military Swap</h1>
			</Link>
			<h3>Buy from, Sell to, and Employ Active Duty and Veterans Only</h3>
		</header>
	);
};

export default Header;
