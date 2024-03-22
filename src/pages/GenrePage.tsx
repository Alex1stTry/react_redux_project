import React from 'react';
import {GenreDetails} from "../components";
import {GenrePagination} from "../components/PaginationContainer/GenrePagination";

const GenrePage = () => {
    return (
        <div>
            <GenreDetails/>
            <GenrePagination/>

        </div>
    );
};

export {GenrePage};