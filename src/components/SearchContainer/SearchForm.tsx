import {SubmitHandler, useForm} from "react-hook-form";

import {searchActions} from "../../store/slices";


import {useAppDispatch, useAppSelector} from "../../hooks";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";


const SearchForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useAppDispatch()
    const {page} = useAppSelector(state => state.search);
    const [query, setQuery] = useSearchParams();
    const submit: SubmitHandler<any> = (data) => {
        dispatch(searchActions.search({query: data, page}));
        reset();
        setQuery(data.query)
    };


    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" name='query' placeholder="Movie's title"{...register('query')}/>
                <button>Search</button>
            </form>
        </div>

    );
};

export {SearchForm};