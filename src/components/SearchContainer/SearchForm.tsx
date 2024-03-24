import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {ISearch} from "../../interfaces/searchInterface";
import {searchActions} from "../../store/slices";
import {useSearchParams} from "react-router-dom";

const SearchForm = () => {
    const {register, reset, handleSubmit} = useForm<ISearch>();
    const [query,] = useSearchParams()
    const page = query.get('page')
    const dispatch = useAppDispatch();
    const submit: SubmitHandler<any> = (query) => {
        dispatch(searchActions.search({query,page}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='word'{...register('query')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export {SearchForm};