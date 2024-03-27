import React from 'react';

import {GenreFilms} from "../components";
import {GenrePagination} from "../components";

const GenrePage = () => {
    return (
        <div>
            <GenreFilms/>
            <GenrePagination/>
        </div>
    );
};

export {GenrePage};