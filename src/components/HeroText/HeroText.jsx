import styles from './HeroText.module.scss'
import { motion } from 'framer-motion'
import AboutButton from '../AboutButton/AboutButton'
import ReadNewsButton from '../ReadNewsButton/ReadNewsButton'

const HeroText = () => {
	return (
		<div className={styles.container}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className={styles.container__inner}>
				<h1 className={styles.container__inner__header}>
					Keep Track Of The <br /> Latest Crypto <br /> News In One
					Place
				</h1>
				<p className={styles.container__inner__description}>
					Select your favourite news provider and <br /> stay up to
					date with recent events
				</p>
				<div className={styles.container__buttons}>
					<ReadNewsButton />
					<AboutButton />
				</div>
			</motion.div>
		</div>
	)
}

export default HeroText
