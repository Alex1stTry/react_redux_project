import {ICollection} from "./collectionInterface";
import {IGenre} from "./genreInterface";
import {IProductionCompanies} from "./productonCompaniesInterface";
import {IProductionCountries} from "./productionCountriesInterface";
import {ILanguage} from "./languageInterface";

export interface IMovieDetails {
    adult:boolean
    "backdrop_path": string
    belongs_to_collection: ICollection
    budgets:number
    genres:IGenre[]
    homepage:string
    id:number
    imdb_id:string
    original_language:string
    original_title:string
    overview:string
    popularity:number
    poster_path:string
    production_companies:IProductionCompanies[]
    production_countries:IProductionCountries[]
    release_date: string
    revenue:number
    runtime:number
    spoken_language:ILanguage[]
    status:string
    tagline:string
    title:string
    video:boolean
    vote_average:number
    vote_count:number
}