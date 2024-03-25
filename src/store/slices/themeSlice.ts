import {createSlice} from "@reduxjs/toolkit";

interface themeState {
    theme: boolean
}

const initialState: themeState = {
    theme: false
};

const themesSlice = createSlice({
    name: 'themesSlice',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme
        }
    },
});

const {reducer: themesReducer, actions} = themesSlice
const themesActions = {
    ...actions,
}

export {
    themesActions,
    themesReducer
}