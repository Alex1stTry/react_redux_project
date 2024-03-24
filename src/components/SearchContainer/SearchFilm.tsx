import React, {FC, PropsWithChildren} from "react";
import {IMoviesInterface} from "../../interfaces";
import ReactStars from "react-rating-stars-component";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    result: IMoviesInterface
}

const SearchFilm: FC<IProps> = ({result}) => {
    const {poster_path, vote_average, title,id} = result;
    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${posterURL}${poster_path}`
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(`/movie/${id}`)}>
            <img src={poster} alt=""/>
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