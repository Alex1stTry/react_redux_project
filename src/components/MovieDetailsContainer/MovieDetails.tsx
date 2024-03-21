import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovieDetails} from "../../interfaces";
import ReactStars from "react-rating-stars-component";

interface IProps extends PropsWithChildren {
    movie: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {title,
        overview,
        vote_average,
        genres,
        poster_path,
        runtime,
        release_date,
    original_title} = movie
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>Back</button>
            <div>title:{title}</div>
            <div>overview:{overview}</div>
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
            <div>{genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>
            <div><img src={poster} alt={original_title}/></div>
            <div>runtime:{runtime}</div>
            <div>release_date:{release_date}</div>
        </div>
    );
};

export {MovieDetails};