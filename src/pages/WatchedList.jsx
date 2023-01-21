import React from 'react'
import { useSelector } from 'react-redux'
import WatchedListCard from './WatchedListCard'

function WatchedList() {
    const {watchedList} = useSelector(state => state.manageFilms)
    return (
      <div className='flex flex-col p-10'>
        <span className=' ml-auto bg-green-500 p-3 rounded-full font-bold text-slate-900'>{watchedList?.length || 0} movies</span>
        <div className=' flex flex-col sm:flex-row gap-5 mt-5 flex-wrap'>
          {watchedList?.map((film, i) => {
            return (
              <WatchedListCard film={film} key={i} />
            )
          })}
        </div>
      </div>
    )
}

export default WatchedList