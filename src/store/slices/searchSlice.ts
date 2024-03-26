import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMoviesInterface, IPagination} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {AxiosError} from "axios";


interface IState {
    searches: IMoviesInterface[],
    page: string
}

let initialState: IState = {
    searches: [],
    page: null
}
const search = createAsyncThunk<IPagination<IMoviesInterface>, { query: string, page: string }>(
    'searchSlice/search',
    async ({query, page}, {rejectWithValue}) => {
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
                    state.searches = action.payload.results
                    state.page = action.payload.page
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
    searchReducer,
}