import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenrePage, GenresPage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";
import {SearchForm} from "./components/SearchContainer";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movie/:id', element: <MovieDetailsPage/>
            },
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {
                        path:'/genres/:id', element:<GenrePage/>
                    }
                ]
            },
            {
                path:'search', element:<SearchPage/>
            }
        ]
    }
])
export {router}