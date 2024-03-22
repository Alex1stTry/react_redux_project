import React, {useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreDetailsActions} from "../../store/slices/genreDetailsSlice";
import {GenreDetail} from "./GenreDetail";

const GenreDetails = () => {
    const [query,] = useSearchParams();
    const page = query.get('page')
    const {id} = useParams();
    const {details} = useAppSelector(state => state.details);


    useEffect(() => {
        dispatch(genreDetailsActions.getGenreFilms(page))
    }, [page]);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreDetailsActions.getGenreFilms(id))
    }, [id]);
    console.log(details)
    return (
        <div>
            {details.map(detail=><GenreDetail key={detail.id} detail={detail}/>)}
        </div>
    );
};

export {GenreDetails};