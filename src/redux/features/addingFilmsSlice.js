import { createSlice } from '@reduxjs/toolkit'

const addingFilmsSlice = createSlice({
    name: 'adding films',
    initialState: {
        watchList: [],
        watchedList:[]
    },
    reducers: {
        addToWatchList: (state , action) => {
            state.watchList.push(action.payload)
        },
        addToWatchedList: (state , action) => {
            state.watchedList.push(action.payload)
        },
        removeFilmFromWatch: (state, action) => {
            state.watchList = state.watchList.filter(el => el.imdbID !== action.payload.imdbID)
        },
        removeFilmFromWatched: (state, action) => {
            state.watchedList = state.watchedList.filter(el => el.imdbID !== action.payload.imdbID)
        }
    }
})

export const { addToWatchList , addToWatchedList ,removeFilmFromWatch , removeFilmFromWatched } = addingFilmsSlice.actions 

export default addingFilmsSlice.reducer