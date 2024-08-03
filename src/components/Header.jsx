import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <header>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
          <span className='text-slate-500'>Real</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
      </Link>
    <form className='flex items-center'>
        <input type='text' placeholder='search...' className='' />
        <FaSearch />
    </form>
    <ul className='flex gap-4'>
      <Link to='/' >
      <li className=''>Home</li>
      </Link>
      <Link to='/about' >
      <li>About</li>
      </Link>
      <Link to='/sign-in' >
      <li>Sign in</li>
      </Link>
    </ul>
    </div>
   </header>
  )
}
