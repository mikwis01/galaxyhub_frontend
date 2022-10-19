import styles from './NewsContent.module.scss'

const NewsContent = (props) => {
	return <div className={styles.container}>{props.children}</div>
}

export default NewsContent
