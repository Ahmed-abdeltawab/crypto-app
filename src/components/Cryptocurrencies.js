import React, { useEffect, useState } from 'react'
import { getCryptos } from '../store/CryptoSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
const Cryptocurrencies = () => {
  const dispatch = useDispatch()
  const { coins } = useSelector(state => state.crypto)
  const [searchInput, setSearchInput] = useState('')
  const [cryptos, setCryptos] = useState(coins)

  useEffect(() => {
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setCryptos(filteredCoins)
    dispatch(getCryptos())
  }, [dispatch, searchInput, coins])
  return (
    <div>
     <div className='w-1/4 mx-auto'>
        <input
          placeholder='Search Cryptocurrency'
          className='mb-4 px-3 py-1 outline-blue-400'
          onChange={e => setSearchInput(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-4 grid-rows-3 gap-6'>
        {cryptos.map((crypto, index) => (
          <Link to={`/CryptoDetails/${crypto.uuid}`} key={crypto.uuid} className='bg-white p-2 hover:shadow-xl transition-all'>
            <div className='flex justify-between items-center border-b border-b-slate-100 p-2'>
              <p>
                <span>{index + 1}.</span>
                {crypto.name}
              </p>
              <img className='w-6 h-6' src={crypto.iconUrl} alt={crypto.name} />
            </div>
            <div className='p-2 pb-3'>
              <p>Price:{(parseInt(crypto.price) )}</p>
              <p>Market Cap:{(parseInt(crypto.marketCap))}</p>
              <p>Daily Change:{(parseInt(crypto.dailyChange))}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cryptocurrencies
