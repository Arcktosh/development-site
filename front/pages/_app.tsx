import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=4, user-scalable=yes" />
					<meta name="theme-color" content="#15bdf7" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				</Head>
				<Component {...pageProps} />
		</>
	);
}

export default MyApp;
