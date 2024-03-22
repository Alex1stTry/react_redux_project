import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";

const genresService = {
    getAll:(): IRes<IGenres> => apiService.get(urls.genres.base),
    getGenreFilms: (with_genres: string, page: string = '1') => apiService.get(urls.genres.byGenre,{params:{with_genres,page}})
}
export {
    genresService
}