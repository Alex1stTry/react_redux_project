import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {genresReducer} from "./slices/genresSlice";

const store = configureStore({
    reducer: {
        results: moviesReducer,
        info: movieInfoReducer,
        genres: genresReducer
    }
})
export {store}