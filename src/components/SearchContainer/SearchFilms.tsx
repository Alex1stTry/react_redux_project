import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {SearchFilm} from "./SearchFilm";
import {SearchPagination} from "../PaginationContainer";
import {searchActions} from "../../store/slices";
// @ts-ignore
import css from './search.module.css'

interface IProps {
    searchWord: string
}

const SearchFilms: FC<IProps> = ({searchWord}) => {
    const word = searchWord
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();
    const page = query.get('page')
    const {searches} = useAppSelector(state => state.search)

    useEffect(() => {
        dispatch( searchActions.search({query: word, page}))
    }, [word, page]);
    return (
        <div className={css.Wrapper}>
            {query && searches.map(search => <SearchFilm result={search} key={search.id}/>)}
            {searches.length>0 && <SearchPagination/>}
        </div>
    )

}
export {SearchFilms}

//  {searches.length>0 && <SearchPagination/>} - схоже на кастиль
// додавав змінну loading в слайс щоб відображати пагінацію тільки коли loading - фолс, але при переході на іншу сторінку пагінація пропадала