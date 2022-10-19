import styles from './About.module.scss'
import NavNews from '../../components/NavNews/NavNews'
import FooterNews from '../../components/FooterNews/FooterNews'
import { motion } from 'framer-motion'

const About = () => {
	return (
		<section className={styles.container}>
			<NavNews />
			<motion.div
				className={styles.container__inner}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				<div className={styles.container__inner__about}>
					<div className={styles.container__inner__about__text}>
						<h4>About us</h4>
						<p>
							Our service works as a hub for the latest news about
							cryptocurrencies and related topics.
						</p>
						<p>
							We agregate the recent posts from three different
							websites, and display them in a user-friendly way.
						</p>
						<p>
							We give our users possibility to filter through the
							results, so you can choose what bundle of articles
							you want to read.
						</p>
					</div>
					<div className={styles.container__inner__about__img}></div>
				</div>
			</motion.div>
			<FooterNews />
		</section>
	)
}

export default About
