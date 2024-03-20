import React from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
// @ts-ignore
import css from './Pagination.module.css'

const MoviesPagination = () => {
    const page = useAppSelector(state => state.results.page);
    const [_, setQuery] = useSearchParams({page: '1'});
    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            window.scrollTo({top: 0, behavior: 'smooth'});
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            window.scrollTo({top: 0, behavior: 'smooth'});
            return prev
        })
    }
    return (
        <div className={css.Pagination}>
            <button disabled={+page===1} onClick={prev}>Previous</button>
            <h2>{+page}</h2>
            <button disabled={+page===500} onClick={next}>Next</button>
        </div>
    );
}


export {MoviesPagination};