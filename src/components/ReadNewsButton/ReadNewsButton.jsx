import styles from './ReadNewsButton.module.scss'
import { Link } from 'react-router-dom'

const ReadNewsButton = () => {
	return (
		<Link to="/news">
			<button className={styles.btn}>READ NEWS</button>
		</Link>
	)
}

export default ReadNewsButton
