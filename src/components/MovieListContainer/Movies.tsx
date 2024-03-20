import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {moviesActions} from "../../store/slices";
import {Movie} from "./Movie";
// @ts-ignore
import css from "./Movies.module.css";
import {useSearchParams} from "react-router-dom";

const Movies = () => {
const [query,] = useSearchParams({page:'1'});
const page = query.get('page')
    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.results);
    useEffect(() => {
        dispatch(moviesActions.getAll(page))
    }, [page]);

    return (
        <div className={css.Wrapper}>
            {results.map(result=><Movie key={result.id} result={result}/>)}
        </div>
    );
};

export {Movies};