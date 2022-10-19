import styles from './AboutButton.module.scss'
import { Link } from 'react-router-dom'

const AboutButton = () => {
	return (
		<Link to="/about">
			<button className={styles.btn}>ABOUT</button>
		</Link>
	)
}

export default AboutButton
