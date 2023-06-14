import React, { useEffect } from 'react'
import { getCryptos } from '../store/CryptoSlice'
import { useDispatch, useSelector } from 'react-redux'
import millify from 'millify'

import CryptoCol from './CryptoCol'
import { Link } from 'react-router-dom'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const style={
h1:`text-2xl font-semibold mb-2`
}

const Home = () => {
  const dispatch = useDispatch()
  const { globalStats } = useSelector(state => state.crypto)
  const { coins } = useSelector(state => state.crypto)
  useEffect(() => {
    dispatch(getCryptos())
  }, [dispatch])
  return (
    <div className='p-4 w-4/5'>
      <h1 className={style.h1}>Global Crypto Stats</h1>
      <div className='grid grid-cols-2 grid-rows-3 gap-x-80 gap-y-6'>
        <CryptoCol title='Total Cryptocurrencies' value={globalStats.total} />
        <CryptoCol
          title='Total Exchanges'
          value={(globalStats.totalExchanges)}
        />
        <CryptoCol
          title='Total Market Cap'
          value={(globalStats.totalMarketCap)}
        />
        <CryptoCol
          title='Total 24h Volume'
          value={(globalStats.total24hVolume)}
        />
        <CryptoCol
          title='Total Markets'
          value={(globalStats.totalMarkets)}
        />
      </div>
      <div className='flex justify-between my-3'>
        <h1  className={style.h1}>Top 10 Cryptos In The World</h1>
        <Link className='text-xl font-semibold text-blue-500' to='/cryptocurrencies'>Show More</Link>
      </div>
      <Cryptocurrencies/>
      <div className='flex justify-between my-3'>
        <h1  className={style.h1}>Latest Crypto News</h1>
        <Link className='text-xl font-semibold text-blue-500' to='/news'>Show More</Link>
      </div>
      <News coins={coins}/>
    </div>
  )
}

export default Home
