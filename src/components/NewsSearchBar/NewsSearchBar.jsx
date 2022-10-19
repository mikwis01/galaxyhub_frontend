import styles from './NewsSearchBar.module.scss'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	setNewsSearchResult,
	loadMoreClicked
} from '../../features/news/newsSlice'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const NewsSearchBar = () => {
	const [showFilters, setShowFilters] = useState(false)

	const [filters, setFilters] = useState({
		search: '',
		daysBack: 0,
		serviceCRN: true,
		serviceCRD: true,
		serviceBIT: true,
		language: ''
	})

	const news = useSelector((state) => state.news.news)
	const loadMoreButtonClicked = useSelector(
		(state) => state.news.loadMoreClick
	)
	const dispatch = useDispatch()

	useEffect(() => {
		let searchResultArray

		searchResultArray = news.filter((news) => {
			if (
				news.header
					.toLowerCase()
					.includes(filters.search.toLowerCase()) ||
				filters.search === ''
			) {
				return true
			} else {
				return false
			}
		})

		searchResultArray = searchResultArray.filter((news) => {
			const newsDate = moment(news.created_at, 'YYYY-MM-DD')
			const now = moment()

			const diff = now.diff(newsDate, 'days')

			if (filters.daysBack === 0) {
				return true
			} else {
				if (diff <= filters.daysBack) {
					return true
				} else {
					return false
				}
			}
		})

		searchResultArray = searchResultArray.filter((news) => {
			if (
				filters.serviceCRN === true &&
				filters.serviceCRD === true &&
				filters.serviceBIT === true
			) {
				return true
			} else if (
				filters.serviceCRN === false &&
				filters.serviceCRD === true &&
				filters.serviceBIT === true
			) {
				if (news.service === 'Cryptonews') {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === true &&
				filters.serviceCRD === false &&
				filters.serviceBIT === true
			) {
				if (news.service === 'CryptoDaily') {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === true &&
				filters.serviceCRD === true &&
				filters.serviceBIT === false
			) {
				if (news.service === 'Bitcoin') {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === false &&
				filters.serviceCRD === false &&
				filters.serviceBIT === true
			) {
				if (
					news.service === 'Cryptonews' ||
					news.service === 'CryptoDaily'
				) {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === true &&
				filters.serviceCRD === false &&
				filters.serviceBIT === false
			) {
				if (
					news.service === 'CryptoDaily' ||
					news.service === 'Bitcoin'
				) {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === false &&
				filters.serviceCRD === true &&
				filters.serviceBIT === false
			) {
				if (
					news.service === 'Cryptonews' ||
					news.service === 'Bitcoin'
				) {
					return false
				} else {
					return true
				}
			} else if (
				filters.serviceCRN === false &&
				filters.serviceCRD === false &&
				filters.serviceBIT === false
			) {
				return false
			}
		})

		searchResultArray = searchResultArray.filter((news) => {
			if (filters.language === '') {
				return true
			} else {
				if (filters.language !== news.language) {
					return false
				} else {
					return true
				}
			}
		})

		dispatch(setNewsSearchResult(searchResultArray))

		if (
			!loadMoreButtonClicked &&
			filters !==
				{
					search: '',
					daysBack: 0,
					serviceCRN: true,
					serviceCRD: true,
					serviceBIT: true,
					language: ''
				}
		)
			dispatch(loadMoreClicked())
	}, [filters])

	return (
		<div className={styles.container}>
			<motion.div
				className={styles.search__container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 1, transition: { duration: 0.5 } }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				<div className={styles.search__container__input_wrapper}>
					<input
						type="text"
						id="search"
						className={styles.search}
						value={filters.search}
						onChange={(e) => {
							setFilters({ ...filters, search: e.target.value })
						}}
						maxLength="15"
						placeholder="Search"
					/>
					<SearchOutlined
						className={styles.search_icon}
						style={{
							fontSize: '16px',
							color: '#E9F2FF',
							opacity: '0.65'
						}}
					/>
				</div>
				<div
					className={
						showFilters
							? `${styles.search__container__filters__button} ${styles.search__container__filters__button_clicked}`
							: `${styles.search__container__filters__button}`
					}
					onClick={() => {
						showFilters
							? setShowFilters(false)
							: setShowFilters(true)
					}}>
					<FilterOutlined
						style={{
							fontSize: '16px',
							color: '#E9F2FF',
							opacity: '0.65'
						}}
					/>
				</div>
			</motion.div>

			{showFilters && (
				<motion.div
					className={styles.filters__container__filters}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 1, transition: { duration: 0.5 } }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}>
					<div
						className={`${styles.filters__container__filters__item} ${styles.filters__container__filters__item__select}`}>
						<span>Days back</span>
						<select
							value={filters.daysBack}
							onChange={(e) =>
								setFilters({
									...filters,
									daysBack: parseInt(e.target.value)
								})
							}>
							<option value="0"></option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>
					</div>
					<div
						className={`${styles.filters__container__filters__item} ${styles.filters__container__filters__item__services}`}>
						<span>Services</span>
						<div
							className={
								styles.filters__container__filters__item__checkboxes
							}>
							<input
								type="checkbox"
								defaultChecked={filters.serviceCRN}
								onChange={() => {
									filters.serviceCRN
										? setFilters({
												...filters,
												serviceCRN: false
										  })
										: setFilters({
												...filters,
												serviceCRN: true
										  })
								}}
							/>

							<input
								type="checkbox"
								defaultChecked={filters.serviceCRD}
								onChange={() => {
									filters.serviceCRD
										? setFilters({
												...filters,
												serviceCRD: false
										  })
										: setFilters({
												...filters,
												serviceCRD: true
										  })
								}}
							/>

							<input
								type="checkbox"
								defaultChecked={filters.serviceBIT}
								onChange={() => {
									filters.serviceBIT
										? setFilters({
												...filters,
												serviceBIT: false
										  })
										: setFilters({
												...filters,
												serviceBIT: true
										  })
								}}
							/>
							<div
								className={
									styles.filters__container__filters__item__checkboxesnames
								}>
								<span
									className={
										filters.serviceCRN
											? styles.filters__container__filters__item__checkboxesnames_service_clicked
											: styles.filters__container__filters__item__checkboxesnames_service
									}>
									CRN
								</span>
								<span
									className={
										filters.serviceCRD
											? styles.filters__container__filters__item__checkboxesnames_service_clicked
											: styles.filters__container__filters__item__checkboxesnames_service
									}>
									CRD
								</span>
								<span
									className={
										filters.serviceBIT
											? styles.filters__container__filters__item__checkboxesnames_service_clicked
											: styles.filters__container__filters__item__checkboxesnames_service
									}>
									BIT
								</span>
							</div>
						</div>
					</div>
					<div
						className={`${styles.filters__container__filters__item} ${styles.filters__container__filters__item__select}`}>
						<span>Language</span>
						<select
							value={filters.language}
							onChange={(e) =>
								setFilters({
									...filters,
									language: e.target.value
								})
							}>
							<option value=""></option>
							<option value="EN">EN</option>
							<option value="PL">PL</option>
						</select>
					</div>
				</motion.div>
			)}
		</div>
	)
}

export default NewsSearchBar
