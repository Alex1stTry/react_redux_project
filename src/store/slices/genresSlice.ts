import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenres} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenres
}

const initialState: IState = {
    genres: null
}
const getAll = createAsyncThunk<IGenres, void>(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
)
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: (builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.genres = action.payload
                })
    )
})

const {reducer: genresReducer, actions} = genresSlice;
const genresActions = {
    ...actions,
    getAll
}

export {
    genresReducer,
    genresActions
}