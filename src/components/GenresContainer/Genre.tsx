import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces";

interface IProps extends PropsWithChildren {
genre:IGenre
}

const  Genre: FC<IProps> = ({genre}) => {
    const {id,name} = genre
 return (
  <div>
   <button>{name}</button>
  </div>
 );
};

export {Genre};