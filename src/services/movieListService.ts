import {IRes} from "../types";
import {IMovieListInterface} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieListService = {
    getAll:(page:string):IRes<IMovieListInterface> => apiService.get(urls.movie.base ,{params:{page}})
}