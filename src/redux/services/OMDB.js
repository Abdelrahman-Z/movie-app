import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const OMDB_Api = createApi({
    reducerPath: 'films_api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://www.omdbapi.com',
    }),
    endpoints: (builder) => ({
        searchFilms: builder.query({query:(string)=> `?s=${string}&apikey=e7dbd329` }),
        filmDetails: builder.query({query:(id)=> `?i=${id}&apikey=e7dbd329` }),
        PlotDetails: builder.query({query:(id)=> `?r=${id}&apikey=e7dbd329` })
    })

})

export const { useSearchFilmsQuery  , useFilmDetailsQuery , usePlotDetailsQuery} = OMDB_Api;