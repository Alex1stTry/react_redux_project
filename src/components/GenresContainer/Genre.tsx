import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(`/genres/${id}`)}>{name}</button>
        </div>
    );
};

export {Genre};