import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e2d7208bd2mshd621fb3008aac6fp168822jsn50bcbfa015b7',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
}

export const getCryptos = createAsyncThunk(
  'crypto/getCryptos',
  async (_, thunkAPI) => {
    try {
      const results = await fetch(
        'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0',
        options
      )
      const data = await results.json()
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
)

const initialState = { globalStats: {}, coins: [] }
const CryptoSlice = createSlice({
  name: 'crypto',
  initialState,

  reducers: {},
  extraReducers: {
    [getCryptos.pending]: (state, action) => {},
    [getCryptos.fulfilled]: (state, action) => {
      state.coins = action.payload.data.coins
      state.globalStats = action.payload.data.stats
    },
    [getCryptos.rejected]: (state, action) => {}
  }
})

export default CryptoSlice.reducer
