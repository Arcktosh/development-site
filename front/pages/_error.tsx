import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Error = ({ statusCode }: any) => {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Something went wrong</h2>
					<p>
						{statusCode
							? `An error ${statusCode} occurred on server`
							: 'An error occurred on client'}
					</p>
					<Image src="/vercel.svg" width={1178} height={1080} alt="logo" />
				</div>
			</div>
		</main>
	)
}
Error.getInitialProps = ({ res, err }: any) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}
export default Error
