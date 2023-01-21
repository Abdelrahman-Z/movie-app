import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {addToWatchedList , addToWatchList} from '../redux/features/addingFilmsSlice'
function FilmsResault({ film }) {
    const [clickedWatchList, setClickedWatchList] = useState(false)
    const [clickedWatched, setClickedWatched] = useState(false)
    const dispatch = useDispatch()
    const handlePushToWatchList = (data) => {
        dispatch(addToWatchList(data))
        setClickedWatchList(true)
    }
    const handlePushToWatchedList = (data) => {
        dispatch(addToWatchedList(data))
        setClickedWatchList(true)
        setClickedWatched(true)
    }
    return (
      <div className='flex flex-row gap-4 container'>
          <div className=' w-[100px]'>
          <img src={film.Poster} className='rounded-md h-full object-fill'/>
          </div>
          <div className='text-left flex flex-col'>
              <Link to={`/film/${film.imdbID}`}><p className=' text-slate-900 font-bold text-2xl mb-2 underline'>{film.Title}</p></Link>
              <span className=' text-gray-500'>{film.Year}</span>
              <div className=' flex flex-row gap-6 mt-28'>
                  <button onClick={()=> handlePushToWatchList(film)}
                   className={` p-3 rounded-md bg-green-400 text-slate-900 font-bold ${clickedWatchList && ' opacity-70 pointer-events-none cursor-pointer'}`}>ADD TO WATCH LIST</button>
                  <button onClick={()=> handlePushToWatchedList(film)} 
                  className={` p-3 rounded-md bg-green-400 text-slate-900 font-bold ${clickedWatched && ' opacity-70 pointer-events-none cursor-pointer'}`}>ADD TO WATCHED</button>
              </div>
          </div>
    </div>
  )
}

export default FilmsResault