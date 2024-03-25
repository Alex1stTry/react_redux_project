import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../store/slices";
import {Genre} from "./Genre";
// @ts-ignore
import css from './Genres.module.css'

const Genres = () => {
   const {genres}= useAppSelector(state => state.genres);
   const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, []);

    return (
        <div className={css.Buttons}>
            {genres && genres.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};