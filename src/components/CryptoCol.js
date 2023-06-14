import React from 'react'

const CryptoCol = ({ title, value }) => {
  return (
    <div className=''>
      <p className='text-gray-400'>{title}</p>
      <p>{value}</p>
    </div>
  )
}

export default CryptoCol
