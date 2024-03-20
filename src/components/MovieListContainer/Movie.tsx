import React, {FC} from "react";
import ReactStars from "react-rating-stars-component";

import {IMoviesInterface} from "../../interfaces";
// @ts-ignore
import css from './Movies.module.css'
import {useNavigate} from "react-router-dom";



interface IProps {
    result: IMoviesInterface
}


const Movie: FC<IProps> = ({result}) => {
    const {vote_average, poster_path, title,id} = result;
    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${posterURL}${poster_path}`
    const navigate = useNavigate();
    return (
        <div className={css.Movie} onClick={()=>navigate(`/movie/${id}`)}>
            <img src={poster} alt={title}/>
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