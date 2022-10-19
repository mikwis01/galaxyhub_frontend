import styles from './News.module.scss'
import NavNews from '../../components/NavNews/NavNews'
import FooterNews from '../../components/FooterNews/FooterNews'
import NewsSearchBar from '../../components/NewsSearchBar/NewsSearchBar'
import NewsContent from '../../components/NewsContent/NewsContent'
import NewsTiles from '../../components/NewsTiles/NewsTiles'

import { getNews, resetLoadMore } from '../../features/news/newsSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const News = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getNews())
		dispatch(resetLoadMore())
	}, [])

	return (
		<section className={styles.container}>
			<NavNews />
			<NewsContent>
				<NewsSearchBar />
				<NewsTiles />
				<FooterNews />
			</NewsContent>
		</section>
	)
}

export default News
