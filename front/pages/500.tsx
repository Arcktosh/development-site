import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Error = () => {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Something went wrong on the server</h2>
					<Image src="/vercel.svg" width={1178} height={1080} alt="logo" />
				</div>
			</div>
		</main>
	)
}
export default Error
