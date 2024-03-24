import {configureStore} from "@reduxjs/toolkit";
import {movieInfoReducer, moviesReducer} from "./slices";
import {genresReducer} from "./slices";
import {genreDetailsReducer} from "./slices";
import {searchReducer} from "./slices";
import {themesReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer: {
        results: moviesReducer,
        info: movieInfoReducer,
        genres: genresReducer,
        details: genreDetailsReducer,
        search: searchReducer,
        themes: themesReducer
    }
})
export {store}