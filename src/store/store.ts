import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {genresReducer} from "./slices";
import {genreDetailsReducer} from "./slices";
import {searchReducer} from "./slices";

const store = configureStore({
    reducer: {
        results: moviesReducer,
        info: movieInfoReducer,
        genres: genresReducer,
        details: genreDetailsReducer,
        search: searchReducer
    }
})
export {store}