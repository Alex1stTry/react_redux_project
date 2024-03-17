import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <div >
                <h2>Movies Database</h2>
                <div>
                    <NavLink to={''}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                </div>
                <h2><span>Theme </span>
                    ThemeSwitcher</h2>
            </div>
        </div>
    );
};

export {Header};