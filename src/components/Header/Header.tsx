import React from 'react';
import {NavLink} from "react-router-dom";


// @ts-ignore
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
                <div>Movies Database</div>
                <div className={css.Links}>
                    <NavLink to={''}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                    <NavLink to={'search'}>Search2</NavLink>
                </div>
        </div>
    );
};

export {Header};