import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {IMoviesInterface} from "../../interfaces";
// @ts-ignore
import css from './search.module.css'


interface IProps extends PropsWithChildren {
    result: IMoviesInterface
}

const SearchFilm: FC<IProps> = ({result}) => {
    const {poster_path, vote_average, title, id} = result;
    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${posterURL}${poster_path}`
    const navigate = useNavigate();
    const imgURl = 'https://ih1.redbubble.net/image.1893341687.8294/fposter,small,wall_texture,product,750x1000.jpg'
    const img = `${imgURl}`

    return (
        <div className={css.Movie} onClick={() => navigate(`/movie/${id}`)}>
            {poster_path ? (
                <img src={poster} alt={title}/>
            ) : (
                <img src={img} alt={title}/>
            )}
            <div>{title}</div>
            <div>{<ReactStars
                count={10}
                value={vote_average}
                size={24}
                edit={false}
                isHalf={true}
                activeColor="#ffd700"
            />}</div>
        </div>
    );
};

export {SearchFilm};