import {SubmitHandler, useForm} from "react-hook-form";





import { useState} from "react";

import {ISearch} from "../../interfaces/searchInterface";
import {SearchFilms} from "./SearchFilms";
// @ts-ignore
import css from './search.module.css'

const SearchForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();

    const [searchWord, setSearchWord] = useState<string>('')
    const submit: SubmitHandler<any> = (data : ISearch) => {
        reset();
        setValue('query',data.query)
        setSearchWord(data.query)

    };
    
    return (
        <div>
            <div className={css.center}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" name='query' placeholder="Movie's title"{...register('query')}/>
                    <button>Search</button>
                </form>
            </div>
            <SearchFilms searchWord={searchWord} key={searchWord}/>
        </div>


    );
};

export {SearchForm};