import styles from './LoadAllButton.module.scss'
import { useDispatch } from 'react-redux'
import { loadMoreClicked } from '../../features/news/newsSlice'
import { motion } from 'framer-motion'

const LoadMoreButton = () => {
	const dispatch = useDispatch()

	const handleClick = () => dispatch(loadMoreClicked())

	return (
		<motion.button
			className={styles.btn}
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			Load all
		</motion.button>
	)
}

export default LoadMoreButton
