import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {toggleTheme} from "../../store/slices/themeSlice"

const Switcher = () => {
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(state => state.themes);
    const toggle = () => {
        dispatch(toggleTheme())
    }
    return (
        <div>
            <button onClick={toggle}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>
        </div>
    );

};

export {Switcher};