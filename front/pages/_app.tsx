import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0,maximum-scale=4, user-scalable=yes"
					/>
					<meta name="theme-color" content="#15bdf7" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
