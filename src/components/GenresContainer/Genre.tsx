import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
// @ts-ignore не зміг вирішити помилку

import css from './Genres.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre

    return (
        <div className={css.Buttons}>
            {<NavLink to={`/genres/${id}`}>{name}</NavLink>}
        </div>
    );
};

export {Genre};