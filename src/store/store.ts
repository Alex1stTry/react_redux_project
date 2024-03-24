import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {genresReducer} from "./slices/genresSlice";
import {genreDetailsReducer} from "./slices/genreDetailsSlice";
import {searchReducer} from "./slices/searchSlice";

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