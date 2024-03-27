import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {IMovieDetails} from "../../interfaces";
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
                <h1>{title}</h1>
            </div>
            <div className={css.PosterInfo}>
                <div className={css.image} style={{
                    position: 'relative',
                }}>
                    <img src={poster} alt={title}/>
                    {genres.map(((genre, index) => <div onClick={() => navigate(`/genres/${genre.id}`)}
                                                        className={css.badge}
                                                        style={{
                                                            position: 'absolute',
                                                            top: `${index * 100}px`,
                                                            left: '-60px',
                                                            translate: 'flexItem',
                                                            padding: '20px',
                                                            background: 'green',
                                                            border: '2px solid black',
                                                            borderRadius: '25px',
                                                            fontSize: '26px'
                                                        }} key={genre.id}>{genre.name}
                    </div>))}
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