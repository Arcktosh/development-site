import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="application-name" content="Create Next App" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Create Next App" />
				<meta name="description" content="Best Create Next App in the world" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#000000" />
				{/* Twitter Card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://nextjs.org" />
				<meta name="twitter:creator" content="@benhenning10" />
				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://nextjs.org" />
				<meta property="og:site_name" content="Create Next App" />
				{/*set Title, Description and Image inside each page for best SEO*/}
				<meta name="twitter:title" content="Create Next App" />
				<meta
					name="twitter:description"
					content="Best Create Next App in the world"
				/>
				<meta
					name="twitter:image"
					content="https://nextjs.org/static/twitter-cards/home.jpg"
				/>
				<meta property="og:title" content="Create Next App" />
				<meta
					property="og:description"
					content="Best Create Next App in the world, Production grade React applications that scale. The world's leading companies use Next.js by Vercel to build static and dynamic websites and web applications."
				/>
				<meta
					property="og:image"
					content="https://nextjs.org/static/twitter-cards/home.jpg"
				/>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
          `,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
export default Document
