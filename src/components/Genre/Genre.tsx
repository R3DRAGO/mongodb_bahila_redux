import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre: {id, name}}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${id}`);
    };
    return (
        <div className={css.Genre} onClick={handleCardClick}>
            <div className={css.Genre_data}>{name}</div>
        </div>
    );
};

export {Genre};