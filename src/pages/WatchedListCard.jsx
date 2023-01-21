import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { removeFilmFromWatched} from '../redux/features/addingFilmsSlice'

function WatchedListCard({ film }) {
  const [hoverd, setHoverd] = useState(false)
  const dispatch = useDispatch()
  const handleToDelete = () => {
    dispatch(removeFilmFromWatched(film))
  }
  return (
    <div className='h-[230px] rounded-md hover:border-[3px] hover:border-green-500 relative'
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={()=> setHoverd(false)}
    >
      <img src={film.Poster} className='h-full' />
      {hoverd &&
        <div className='absolute inset-0 w-full h-full flex justify-center items-center gap-2'>
          <button
            className=' font-bold hover:text-green-300 bg-black/20 p-2 text-white rounded-full '
            onClick={() => handleToDelete()}
          >X</button>
        </div>
      }
    </div>
  )
}

export default WatchedListCard