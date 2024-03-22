import React, {FC, PropsWithChildren} from "react";
import ReactStars from "react-rating-stars-component";

import {IMoviesInterface} from "../../interfaces";

interface IProps extends PropsWithChildren {
    detail: IMoviesInterface
}

const GenreDetail: FC<IProps> = ({detail}) => {
    const {id, poster_path, vote_average, title} = detail
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    return (
        <div>

            <img src={poster} alt=""/>
            <div>{<ReactStars
                count={10}
                size={28}
                activeColor="#eb8634"
                value={vote_average}
                edit={false}
                isHalf={true}
            />}</div>
            <div>{id}</div>
            <div>{title}</div>
        </div>
    );
};

export {GenreDetail};