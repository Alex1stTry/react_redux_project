import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreDetailsActions} from "../../store/slices";
import {GenreDetail} from "./GenreFilm";


// @ts-ignore - не зміг вирішити помилку

import css from './GenreFilms.module.css'
const GenreFilms = () => {

    const [query,] = useSearchParams({page:'1'});
    const page = query.get('page')
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {details} = useAppSelector(state => state.details);

    useEffect(() => {
        dispatch(genreDetailsActions.getGenreFilms({id,page}))
    }, [page,id]);


    return (
        <div className={css.GenreFilms}>
            {details && details.map(detail=><GenreDetail key={detail.id} detail={detail}/>)}
        </div>
    );
};

export {GenreFilms};