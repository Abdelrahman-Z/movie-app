import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className='bg-slate-900 p-7'>
        <div className='flex flex-row justify-between container  items-center'>
            <h1 className='font-bold text-white text-3xl'>Movies</h1>
            <ul className='flex flex-row gap-5 text-white font-bold items-center'>
                <li><Link to='/watch-list'>Watch List</Link></li>
                <li><Link to='/watched'>Watched</Link></li>
                <li className=' bg-green-400 p-2 rounded-md'><Link to='/'>ADD</Link></li>
            </ul>
        </div>
      </div>
      
  )
}

export default Header