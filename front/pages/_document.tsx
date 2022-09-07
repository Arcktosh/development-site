import { Html, Head, Main, NextScript } from 'next/document';
import { gtag, lang } from 'context/constants';
import GetOrgSeo from 'snippets/getOrgSeo';

const Document = () => {
	const { orgSeo } = GetOrgSeo();
	return (
		<Html lang={lang}>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="application-name" content={orgSeo?.openGraph.title} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content={orgSeo?.openGraph?.title} />
				<meta name="description" content={orgSeo?.openGraph?.description} />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#000000" />
				{/* Twitter Card */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content={orgSeo?.twitter.title} />
				<meta name="twitter:creator" content={orgSeo?.twitter.author} />
				<meta name="twitter:title" content={orgSeo?.twitter?.title} />
				<meta name="twitter:description" content={orgSeo?.twitter?.description} />
				<meta name="twitter:image" content={orgSeo?.twitter?.image?.url} />
				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={orgSeo?.openGraph.url} />
				<meta property="og:site_name" content={orgSeo?.openGraph.title} />
				<meta property="og:title" content={orgSeo?.openGraph?.title} />
				<meta property="og:description" content={orgSeo?.openGraph?.description} />
				<meta property="og:image" content={orgSeo?.openGraph?.image?.url} />
				{/* Google Tag Manager */}
				<script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} />
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag}');
          `,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
