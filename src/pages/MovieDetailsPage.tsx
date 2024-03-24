import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../store/slices";
import {MovieDetails} from "../components";


const MovieDetailsPage = () => {

    const {id} = useParams();

    const {info} = useAppSelector(state => state.info);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieActions.getById(+id))
    }, [id]);
    return (
        <div>
            {info && <MovieDetails movie={info} key={info.id}/>}
        </div>
    );
};

export {MovieDetailsPage};