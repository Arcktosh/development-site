import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Offline = () => {
	return (
		<main className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.card}>
					<h2>Sorry, we appear to be offline</h2>
					<Image src="/vercel.svg" width={1178} height={1080} alt="logo" />
				</div>
			</div>
		</main>
	)
}
export default Offline
