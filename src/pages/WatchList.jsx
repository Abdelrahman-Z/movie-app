import React  from 'react'
import { useSelector } from 'react-redux'
import WatchListCard from './WatchListCard'
function WatchList() {
    const {watchList} = useSelector(state => state.manageFilms)
  return (
    <div className='flex flex-col p-10'>
      <span className=' ml-auto bg-green-500 p-3 rounded-full font-bold text-slate-900'>{watchList?.length || 0} movies</span>
      <div className=' flex flex-col sm:flex-row gap-5 mt-5 flex-wrap'>
        {watchList?.map((film, i) => {
          return (
            <WatchListCard film={film} key={i} />
          )
        })}
      </div>
    </div>
  )
}

export default WatchList