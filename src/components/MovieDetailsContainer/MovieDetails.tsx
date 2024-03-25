import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovieDetails} from "../../interfaces";
import ReactStars from "react-rating-stars-component";
// @ts-ignore
import css from './MoviesDetails.module.css'

interface IProps extends PropsWithChildren {
    movie: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {
        title,
        overview,
        vote_average,
        genres,
        poster_path,
        runtime,
        release_date,
    } = movie
    const imgURL = 'https://image.tmdb.org/t/p/w500'
    const poster = `${imgURL}${poster_path}`
    const navigate = useNavigate();
    return (
        <div className={css.MovieCard}>
            <div className={css.Title}>
                <h1>{title}</h1></div>
            <div className={css.PosterInfo}>
                <div className={css.image}>
                    <img src={poster} alt="poster"/>
                </div>
                <div>Rating:
                    {<ReactStars
                        count={10}
                        size={28}
                        activeColor="#eb8634"
                        value={vote_average}
                        edit={false}
                        isHalf={true}
                    />}
                    <div className={css.Genres}>
                        {genres.map(genre => <span className={css.badge}>{genre.name}</span>)}
                    </div>
                    <div><h4>Runtime: {runtime} minutes</h4>
                    </div>
                    <div><h4>Release data: {release_date}</h4>
                    </div>
                </div>
            </div>
            <div className={css.Overview}><h3>Overview:</h3>{overview}</div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
export {MovieDetails};