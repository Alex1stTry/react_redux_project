import React from 'react';
import {SearchForm} from "./SearchForm";
import {useAppSelector} from "../../hooks";
import {SearchFilm} from "./SearchFilm";



const SearchFilms = () => {
    const {error,searches} = useAppSelector(state => state.search);
    return (
        <div>
            <div>
                <SearchForm/>
            </div>
            <div>
                {!error && searches.map(search =><SearchFilm key={search.id}  movie={search}/>)}
            </div>
        </div>
    );
};
export {
    SearchFilms
};