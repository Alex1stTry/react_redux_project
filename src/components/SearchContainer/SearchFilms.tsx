
import {useAppDispatch, useAppSelector} from "../../hooks";
import {SearchFilm} from "./SearchFilm";
import {SearchPagination} from "../PaginationContainer";

import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {searchActions} from "../../store/slices";
import {FC} from "react";

interface IProps{
    searchWord:string
}
const SearchFilms:FC<IProps> = ({searchWord}) => {
    const word = searchWord
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();
    const page = query.get('page')
    const {searches} = useAppSelector(state => state.search)


    useEffect(() => {
        dispatch(searchActions.search({query:word,page}))
    }, [word,page]);
        return (
            <div>
                <div>

                    {query && searches.map(search=><SearchFilm result={search} key={search.id}/>)}
                    <SearchPagination/>
                </div>
                <div>
              

                </div>
            </div>
        )

}
 export {SearchFilms}
