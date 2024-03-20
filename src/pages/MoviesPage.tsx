import React from 'react';

import {Movies} from "../components/MovieListContainer";
import {MoviesPagination} from "../components/PaginationContainer";


const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};