import {FC, PropsWithChildren} from "react";
import {ICollection, IMovieDetails, IMoviesInterface} from "../../interfaces";

interface IProps extends PropsWithChildren {
movie: IMoviesInterface
}

const SearchFilm: FC<IProps> = ({movie}) => {
    const {poster_path,title,vote_average,} = movie;
    return (
        <div>

        </div>
    );
};

export {SearchFilm};