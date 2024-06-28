import './globals.css';

export const metadata = {
	title: 'Military Swap',
	description: 'Buy from, Sell to, and Employ Active Duty and Veterans Only',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header>
					<div>Military Swap</div>
					<div>Buy from, Sell to, and Employ Active Duty and Veterans Only</div>
				</header>
				<main>{children}</main>
				<footer>copyright Military Swap {new Date().getFullYear()}</footer>
			</body>
		</html>
	);
}
