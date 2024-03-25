import React from 'react';
import {NavLink} from "react-router-dom";
import {FormControlLabel, Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {themesActions} from "../../store/slices/themeSlice";
// @ts-ignore
import css from './Header.module.css'


const Header = () => {
    const {theme} = useAppSelector(state => state.themes);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(themesActions.toggleTheme())
        if (theme) {
            document.querySelector('body').setAttribute('theme', 'dark')
        } else {
            document.querySelector('body').setAttribute('theme', 'light')
        }

    }



    return (
        <div className={css.Header}>
            <div>Movies Database</div>
            <div className={css.Links}>
                <NavLink to={''}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <FormControlLabel
                control={<Switch
                    checked={theme}
                    onChange={changeTheme}
                    color="default"
                    inputProps={{'aria-label': 'controlled'}}
                />}
                label="Theme Switcher"
                labelPlacement="end"
            />

        </div>
    );
}

export {Header};