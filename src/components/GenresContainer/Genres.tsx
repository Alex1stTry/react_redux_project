import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../store/slices/genresSlice";
import {Genre} from "./Genre";


const Genres = () => {
   const {genres}= useAppSelector(state => state.genres);
   const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genresActions.getAll())
    }, []);

    return (
        <div>
            {genres && genres.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};