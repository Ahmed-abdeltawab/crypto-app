import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/cryptocurrency.png'
import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb
} from 'react-icons/ai'

const style = {
  li: `flex gap-3 items-center text-gray-200  p-2 mb-3`
}
const Navbar = () => {
  return (
    <div className='w-1/5 '>
      <div className='bg-slate-900 h-full fixed z-40'>
        <div className='flex items-center gap-4 mb-6 p-3'>
          <img className='w-8 h-8' src={logo} alt='logo' />
          <h1 className='text-white font-semibold text-2xl'>Cryptoreverse</h1>
        </div>
        <ul className='links'>
          <NavLink className={style.li} to='/'>
            <AiOutlineHome />
            <p>Home</p>
          </NavLink>
          <NavLink className={style.li} to='/cryptocurrencies'>
            <AiOutlineFund />
            <p>Cryptocurrencies</p>
          </NavLink>
          <NavLink className={style.li} to='/exchange'>
            <AiOutlineMoneyCollect />
            <p>Exchange</p>
          </NavLink>
          <NavLink className={style.li} to='/news'>
            <AiOutlineBulb />
            <p>News</p>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
