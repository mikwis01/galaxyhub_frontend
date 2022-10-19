import styles from './Landing.module.scss'
import LandingBackground from '../../components/LandingBackground/LandingBackground'
import HeroImage from '../../components/HeroImage/HeroImage'
import HeroText from '../../components/HeroText/HeroText'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

const Landing = () => {
	return (
		<section className={styles.container}>
			<LandingBackground />
			<Nav />
			<HeroText />
			<HeroImage />
			<Footer />
		</section>
	)
}

export default Landing
