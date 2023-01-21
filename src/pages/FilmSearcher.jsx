import {useState} from 'react'
import { useSearchFilmsQuery } from '../redux/services/OMDB'
import FilmsResault from './FilmsResault'
function FilmSearcher() {
	const [film, setFilm] = useState('')
	const handleChange = (e) => {
		setFilm(e.target.value)
	}
	const { data } = useSearchFilmsQuery(film)
  return (
    <div className='py-10 px-40 text-center'>
			<input
				className=' bg-slate-900 rounded-md text-white font-bold tracking-wider w-full p-5' 
				onChange={(e)=> handleChange(e)}
				/>
			<div className='flex flex-col gap-2 p-3'>
				{data?.Search?.map((film, i) => (
					<FilmsResault
						key={i}
						film={film}
					/>
				))}
			</div>
    </div>
  )
}

export default FilmSearcher