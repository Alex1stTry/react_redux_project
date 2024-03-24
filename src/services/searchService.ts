import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMoviesInterface, IPagination} from "../interfaces";

const searchService = {
    search: (query: string, page: string): IRes<IPagination<IMoviesInterface>> => apiService.get(urls.search, {
        params: {
            query,
            page
        }
    })
}

export {
    searchService
}