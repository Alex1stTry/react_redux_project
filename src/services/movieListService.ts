import {IRes} from "../types";
import {IMoviesInterface, IPagination} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const movieListService = {
    getAll: (page: string = '1'): IRes<IPagination<IMoviesInterface>> => apiService.get(urls.movie.base, {params: {page}})
}
export {
    movieListService
}