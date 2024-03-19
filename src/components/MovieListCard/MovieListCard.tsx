import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IResult} from "../../interfaces";
import css from "./MovieListCard.module.css";
import {urls} from "../../constants";
import {Rating} from "@mui/material";

interface IProps {
    movie: IResult
}

const MovieListCard: FC<IProps> = ({movie}) => {
    const {title, id, poster_path, vote_average} = movie
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className={css.MovieListCard} onClick={handleCardClick}>
            <div className={css.Card}>
                <div className={css.Title}><h1>{title}</h1></div>
                <img src={`${urls.poster}${poster_path}`} alt={`${title}`}/>
                <div className={css.Stars}><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
            </div>
        </div>
    );
};


export {MovieListCard};

