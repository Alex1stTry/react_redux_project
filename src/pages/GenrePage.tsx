import React from 'react';
import {GenreFilms} from "../components";
import {GenrePagination} from "../components/PaginationContainer/GenrePagination";

const GenrePage = () => {
    return (
        <div>
            <GenreFilms/>
            <GenrePagination/>

        </div>
    );
};

export {GenrePage};