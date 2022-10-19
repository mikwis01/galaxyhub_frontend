import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import newsService from './newsService'

export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
	try {
		return await newsService.getNews()
	} catch (error) {
		const message =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString()

		return thunkAPI.rejectWithValue(message)
	}
})

const initialState = {
	news: [],
	searchNewsResult: [],
	loadMoreClick: false,
	success: false,
	loading: false,
	error: false,
	message: ''
}

const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		reset: (state) => initialState,
		resetSearchNewsResult: (state) => {
			state.searchNewsResult = state.news
		},
		setNewsSearchResult: (state, action) => {
			state.searchNewsResult = action.payload
		},
		resetLoadMore: (state) => {
			state.loadMoreClick = false
		},
		loadMoreClicked: (state) => {
			state.loadMoreClick = true
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNews.pending, (state) => {
				state.loading = true
			})
			.addCase(getNews.fulfilled, (state, action) => {
				state.loading = false
				state.success = true
				state.news = action.payload
				state.searchNewsResult = action.payload
			})
			.addCase(getNews.rejected, (state, action) => {
				state.loading = false
				state.error = true
				state.message = action.payload
			})
	}
})

export const {
	resetSearchNewsResult,
	setNewsSearchResult,
	loadMoreClicked,
	resetLoadMore
} = newsSlice.actions

export default newsSlice.reducer
