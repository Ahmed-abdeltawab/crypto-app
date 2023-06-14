import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies'
import Exchange from './components/Exchange'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import CryptoDetails from './components/CryptoDetails'
const App = () => {
  return (
    <div className='bg-slate-100 flex '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/crypto/:id' element={<CryptoDetails/>} />
        <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  )
}

export default App
