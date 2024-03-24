import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres, IMoviesInterface, IPagination} from "../interfaces";

const genresService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres.base),
    getGenreFilms: (with_genres: string, page: string): IRes<IPagination<IMoviesInterface>> => apiService.get(urls.movie.base, {
        params: {
            with_genres,
            page
        }
    })
}
export {
    genresService
}