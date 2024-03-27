import React from 'react';

import {Movies} from "../components";
import {MoviesPagination} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};