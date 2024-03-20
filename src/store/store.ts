import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";

const store = configureStore({
    reducer: {
        results: moviesReducer,
        info: movieInfoReducer
    }
})
export {store}