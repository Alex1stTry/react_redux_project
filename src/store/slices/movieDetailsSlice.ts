import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieDetails} from "../../interfaces";
import {movieListService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    id: number,
    info: IMovieDetails
}

let initialState: IState = {
    id: null,
    info: null
};
const getById = createAsyncThunk<IMovieDetails, number>(
    'movieDetailsSlice / getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieListService.getById(id);
            return data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response.data)
        }
    }
)
const movieDetailsSlice = createSlice({
    name: 'movieDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder =>
            builder
                .addCase(getById.fulfilled, (state, action) => {
                    state.info = action.payload
                    state.id = action.payload.id
                })
    )
})
const {reducer: movieInfoReducer, actions} = movieDetailsSlice;

const movieActions = {
    ...actions,
    getById
}
export {
    movieActions,
    movieInfoReducer
}