import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const options = {
  method: 'GET',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'e2d7208bd2mshd621fb3008aac6fp168822jsn50bcbfa015b7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
}

export const getNews = createAsyncThunk(
  'cryptoNews/getNews',
  async (_, thunkAPI) => {
    try {
      const results = await fetch(
        `https://bing-news-search1.p.rapidapi.com/news?q=Cryptocurrency&safeSearch=Off&textFormat=Raw`,
        options
      )
      const data = await results.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)

const initialState = { news: [] }
const NewsSlice = createSlice({
  name: 'cryptoNews',
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state, action) => {
      
    },
    [getNews.fulfilled]: (state, action) => {
      console.log(action)
      state.news = action.payload.value
    },
    [getNews.rejected]: (state, action) => {
      
    }
  }
})

export default NewsSlice.reducer
