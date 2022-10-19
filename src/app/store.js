import { configureStore } from '@reduxjs/toolkit'
import newsSlice from '../features/news/newsSlice'

export const store = configureStore({
	reducer: {
		news: newsSlice
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
