import styles from './NewsTiles.module.scss'
import NewsTile from '../NewsTile/NewsTile'
import { useSelector } from 'react-redux'
import LoadAllButton from '../LoadAllButton/LoadAllButton'
import { ClipLoader } from 'react-spinners'
import { motion, AnimatePresence } from 'framer-motion'

const NewsTiles = () => {
	const searchResults = useSelector((state) => state.news.searchNewsResult)
	const loadMoreButtonClicked = useSelector(
		(state) => state.news.loadMoreClick
	)
	const isLoading = useSelector((state) => state.news.loading)

	const resultsSnippet = searchResults
		.slice(0, 6)
		.map((news) => <NewsTile key={news._id} news={news} />)

	const resultsFull = searchResults.map((news) => (
		<NewsTile key={news._id} news={news} />
	))

	let content

	if (isLoading) {
		content = (
			<p
				style={{
					width: '100%',
					gridColumnEnd: 3,
					textAlign: 'center'
				}}>
				<ClipLoader color={'#3e6bae'} />
			</p>
		)
	} else {
		if (searchResults.length > 0) {
			content = loadMoreButtonClicked ? resultsFull : resultsSnippet
		} else {
			content = (
				<p
					style={{
						width: '100%',
						gridColumnEnd: 3,
						textAlign: 'center'
					}}>
					No matching news!
				</p>
			)
		}
	}

	return (
		<div className={styles.container}>
			{loadMoreButtonClicked ? (
				<motion.div className={styles.container__inner_button_clicked}>
					<AnimatePresence>{content}</AnimatePresence>
					{isLoading || loadMoreButtonClicked || <LoadAllButton />}
				</motion.div>
			) : (
				<div className={styles.container__inner}>
					{content}
					{isLoading || loadMoreButtonClicked || <LoadAllButton />}
				</div>
			)}
			{/* <div
				className={
					loadMoreButtonClicked
						? styles.container__inner_button_clicked
						: styles.container__inner
				}>
				<AnimatePresence>{content}</AnimatePresence>
				{isLoading || loadMoreButtonClicked || <LoadAllButton />}
			</div> */}
		</div>
	)
}

export default NewsTiles
