import './globals.css';
import { Header, Footer } from '@/components';

export const metadata = {
	title: 'Military Swap',
	description: 'Buy from, Sell to, and Employ Active Duty and Veterans Only',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='max-w-[1400px] m-auto'>
				<Header />
				<main className='p-4 pt-0'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
