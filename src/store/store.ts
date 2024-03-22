import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {genresReducer} from "./slices/genresSlice";
import {genreDetailsReducer} from "./slices/genreDetailsSlice";

const store = configureStore({
    reducer: {
        results: moviesReducer,
        info: movieInfoReducer,
        genres: genresReducer,
        details: genreDetailsReducer
    }
})
export {store}