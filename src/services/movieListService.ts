import {IRes} from "../types";
import {IMovieDetails, IMoviesInterface, IPagination} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieListService = {
    getAll: (page: string = '1'): IRes<IPagination<IMoviesInterface>> => apiService.get(urls.movie.base, {params: {page}}),
    getById: (id:number):IRes<IMovieDetails> => apiService.get(urls.movie.byId(id))
}

export {
    movieListService
}