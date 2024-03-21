import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenres} from "../interfaces";

const genresService = {
    getAll:(): IRes<IGenres[]> => apiService.get(urls.genres.base)
}
export {
    genresService
}