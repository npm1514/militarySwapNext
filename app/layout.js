'use client';

import { useEffect } from 'react';
import './globals.css';
import { Header, Footer } from './components';

export default function RootLayout({ children }) {
	const setCookie = (name, value, daysToExpire) => {
		const date = new Date();
		date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
		const expires = 'expires=' + date.toUTCString();
		document.cookie = name + '=' + value + ';' + expires + ';path=/';
	};
	// change this with real idme values
	// Retrieving a cookie
	const getCookie = (name) => {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i].trim();
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1);
			}
		}
		return null;
	};
	useEffect(() => {
		if (!getCookie('idme')) {
			setCookie('idme', true, 7);
			window.location.href = `https://api.id.me/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_IDME_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_IDME_REDIRECT_URI}&response_type=code&scope=${process.env.NEXT_PUBLIC_IDME_SCOPE}`;
		}
	}, []);
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body className='max-w-[1400px] m-auto'>
				<Header />
				<main className='p-4 pt-0'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
