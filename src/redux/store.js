import { OMDB_Api } from "./services/OMDB";
import { configureStore } from "@reduxjs/toolkit";
import addingFilmsSlice from "./features/addingFilmsSlice";

export const store = configureStore({
    reducer: {
        [OMDB_Api.reducerPath]: OMDB_Api.reducer,
        manageFilms: addingFilmsSlice
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(OMDB_Api.middleware)
})