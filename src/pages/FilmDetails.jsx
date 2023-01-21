import React from 'react'
import { useFilmDetailsQuery, usePlotDetailsQuery } from '../redux/services/OMDB'
import {useParams} from 'react-router-dom'
function FilmDetails() {
    const {details} = useParams()
    const { data } = useFilmDetailsQuery(details)
    const { data: plotData } = usePlotDetailsQuery(details)
    console.log(plotData)
  return (
      <div className='p-10 flex flex-col justify-center items-center gap-6'>
          <img src={data?.Poster === "N/A" ? '' : data?.Poster} />
          <p className='font-bold text-3xl'>{data?.Title}</p>
          <span className='text-2xl underline'>ACTORS:</span>
          <p className='font-bold text-2xl'>{data?.Actors === "N/A" ? 'UnKnown' :data?.Actors}</p>
          <span className='text-2xl underline uppercase'>Released:</span>
          <p className='font-bold text-2xl'>{data?.Released === "N/A" ? 'UnKnown' :data?.Released}</p>
          <span className='text-2xl underline uppercase'>story:</span>
          <p className='font-bold text-2xl'>{data?.Plot === "N/A" ? 'UnKnown' :data?.Plot}</p>
          <span className='text-2xl underline uppercase'>country:</span>
          <p className='font-bold text-2xl'>{data?.Country === "N/A" ? 'UnKnown' :data?.Country}</p>
          <span className='text-2xl underline uppercase'>type:</span>
          <p className='font-bold text-2xl'>{data?.Genre === "N/A" ? 'UnKnown' :data?.Genre}</p>
          <span className='text-2xl underline uppercase'>Language:</span>
          <p className='font-bold text-2xl'>{data?.Language === "N/A" ? 'UnKnown' :data?.Language}</p>
      </div>
  )
}

export default FilmDetails