
import {SearchForm} from "./SearchForm";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SearchFilm} from "./SearchFilm";
import {SearchPagination} from "../PaginationContainer";

import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {searchActions} from "../../store/slices";

const SearchFilms = () => {
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();
    const page = query.get('page')
    const {searches} = useAppSelector(state => state.search)


    useEffect(() => {
        // @ts-ignore
        dispatch(searchActions.search({query,page}))
    }, [page,query]);
        return (
            <div>
                <div>
                    <SearchForm/>
                    {query && searches.map(search=><SearchFilm result={search} key={search.id}/>)}
                    <SearchPagination/>
                </div>
                <div>
              

                </div>
            </div>
        )

}
 export {SearchFilms}
