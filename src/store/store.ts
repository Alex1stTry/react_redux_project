import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviseSlice";

const store = configureStore({
    reducer: {
        results: moviesReducer
    }
})
export {store}