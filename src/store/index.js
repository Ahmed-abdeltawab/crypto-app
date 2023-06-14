import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './CryptoSlice'
import newsReducer from './NewsSlice'
const store = configureStore({
  reducer: { crypto: cryptoReducer, cryptoNews: newsReducer }
})

export default store
