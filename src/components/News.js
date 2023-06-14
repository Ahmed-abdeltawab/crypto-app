import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../store/NewsSlice'

const News = ({ coins }) => {
  const dispatch = useDispatch()
  const { news } = useSelector(state => state.cryptoNews)
  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])
  return (
    <>
      <div className='grid grid-cols-3 gap-6'>
        {news.map((item, index) => (
          <div key={index} className='bg-white p-3'>
            <a href={item.url} target='_blank' rel='noreferrer'>
              <div className='flex items-center'>
                <p>{item.name}</p>
                <img
                  className='w-20 h-20'
                  src={item?.image?.thumbnail?.contentUrl}
                  alt={item.name}
                />
              </div>
            </a>
            <p className='text-sm my-2 text-slate-400'>
              {item.description.length > 100
                ? `${item.description.substring(0, 100)}...`
                : item.description}
            </p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  className='w-5 h-5 block rounded-full mr-2'
                  src={item?.provider[0]?.image?.thumbnail?.contentUrl}
                  alt='provider'
                />
                <p>{item?.provider[0]?.name}</p>
              </div>
              <p>
                {moment(item.datePublished)
                  .startOf('ss')
                  .fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default News
