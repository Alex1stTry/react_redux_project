import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMoviesInterface, IPagination} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";


interface IState {
    searches: IMoviesInterface[],
    page: string,
    error: string
}

let initialState: IState = {
    searches: null,
    page: null,
    error: null
}
const search = createAsyncThunk<IPagination<IMoviesInterface>, { page: string, query: string }>(
    'searchSlice/search',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.search(query, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: (builder =>
            builder
                .addCase(search.fulfilled, (state, action) => {
                    state.page = action.payload.page
                    state.searches = action.payload.results
                })
                .addCase(search.rejected, (state, action) => {
                    state.error = action.payload as string
                })
    )
})
const {reducer: searchReducer, actions} = searchSlice;
const searchActions = {
    ...actions,
    search
}

export {
    searchActions,
    searchReducer
}