import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMoviesInterface, IPagination} from "../../interfaces";
import {movieListService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    page: string
    results: IMoviesInterface[]
}

const initialState: IState = {
    page: null,
    results: []
}

const getAll = createAsyncThunk<IPagination<IMoviesInterface>, string>(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieListService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.results = action.payload.results
                    state.page = action.payload.page
                })
    )
})

const {reducer: moviesReducer, actions} = moviesSlice
const moviesActions = {
    ...actions,
    getAll
}
export {
    moviesActions,
    moviesReducer
}