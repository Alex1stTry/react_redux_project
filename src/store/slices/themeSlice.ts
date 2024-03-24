import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface themeState {
    theme: string
}

const initialState: themeState = {
    theme: 'light',
};

const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        },
    },
});

const {reducer: themesReducer, actions} = themesSlice
const themesActions = {
    ...actions,
}
export const { toggleTheme } = themesSlice.actions
export {
    themesActions,
    themesReducer
}