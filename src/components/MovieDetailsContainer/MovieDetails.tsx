import {FC, PropsWithChildren} from "react";
import {IMovieDetails} from "../../interfaces";
import {useNavigate} from "react-router-dom";

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
            <div>vote_average:{vote_average}</div>
            <div>{genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>
            <div><img src={poster} alt={original_title}/></div>
            <div>runtime:{runtime}</div>
            <div>release_date:{release_date}</div>
        </div>
    );
};

export {MovieDetails};