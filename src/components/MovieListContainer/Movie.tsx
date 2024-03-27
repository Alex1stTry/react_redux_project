import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {IMoviesInterface} from "../../interfaces";
// @ts-ignore
import css from './Movies.module.css'


interface IProps {
    result: IMoviesInterface
}

const Movie: FC<IProps> = ({result}) => {
    const {vote_average, poster_path, title, id} = result;
    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${posterURL}${poster_path}`
    const navigate = useNavigate();
    const img = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'

    return (
        <div className={css.Movie} onClick={() => navigate(`/movie/${id}`)}>
            <img src={poster} alt={img}/>
            <div>{title}</div>
            <div>{
                <ReactStars
                    count={10}
                    value={vote_average}
                    size={24}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                />
            }</div>
        </div>
    );
};

export {Movie};