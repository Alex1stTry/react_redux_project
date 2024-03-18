import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store/slices/moviseSlice";
import {Movie} from "./Movie";
// @ts-ignore
import css from "./Movies.module.css";

const Movies = () => {
    const dispatch = useAppDispatch();
    const {results, page} = useAppSelector(state => state.results);
    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, []);
    console.log(results)


    return (
        <div className={css.Wrapper}>
            {results.map(result=><Movie key={result.id} result={result}/>)}
        </div>
    );
};

export {Movies};