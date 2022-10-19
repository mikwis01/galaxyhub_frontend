import axios from 'axios'

const API_URL = 'https://galaxyhubapi-production.up.railway.app/news'

const getNews = async (token) => {
	const response = await axios.get(API_URL)

	return response.data
}

const newsService = {
	getNews
}

export default newsService
