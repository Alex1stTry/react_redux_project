import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMoviesInterface, IPagination} from "../../interfaces";
import {genresService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    page: string
    details: IMoviesInterface[]
}

const initialState: IState = {
    page: null,
    details: []
}
const getGenreFilms = createAsyncThunk<IPagination<IMoviesInterface>, string>(
    'genreDetailsSlice/getGenreFilms',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getGenreFilms(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const genreDetailsSlice = createSlice({
        name: 'genreDetailsSlice',
        initialState,
        reducers: {},
        extraReducers: (builder => builder
                .addCase(getGenreFilms.fulfilled, (state, action) => {
                    state.page = action.payload.page
                    state.details = action.payload.results
                })
        )
    }
)

const {reducer: genreDetailsReducer, actions} = genreDetailsSlice;
const genreDetailsActions = {
    ...actions,
    getGenreFilms
}
export {
    genreDetailsReducer,
    genreDetailsActions
}