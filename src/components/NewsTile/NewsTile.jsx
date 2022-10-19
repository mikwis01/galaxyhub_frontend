import styles from './NewsTile.module.scss'
import { motion } from 'framer-motion'

const NewsTile = ({ news }) => {
	let header

	if (news.header.length > 65) {
		header = `${news.header.slice(0, 64)} ...`
	} else {
		header = news.header
	}

	return (
		<motion.a
			href={news.link}
			target="_blank"
			rel="noopener noreferrer"
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			<div className={styles.container}>
				<div
					className={styles.overlay_image}
					style={{ backgroundImage: `url(${news.image})` }}
				/>
				<div className={styles.overlay}>
					<div className={styles.overlay__inner_container}>
						<p>{news.service}</p>
						<p>{header}</p>
						<p>{news.created_at}</p>
					</div>
				</div>
			</div>
		</motion.a>
	)
}

export default NewsTile
