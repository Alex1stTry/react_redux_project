import React from 'react';
import {NavLink} from "react-router-dom";


// @ts-ignore
import css from './Header.module.css'
import {Switcher} from "../ThemeContainer/Switcher";

const Header = () => {
    return (
        <div className={css.Heade}>
            <div>Movies Database</div>
            <div className={css.Links}>
                <NavLink to={''}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div>
                <Switcher/>
            </div>
        </div>
    );
};

export {Header};