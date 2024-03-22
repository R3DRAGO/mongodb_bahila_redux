import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import ReactStars from 'react-stars'

import {IResult} from "../../interfaces";
import css from "./MovieListCard.module.css";
import {urls} from "../../constants";

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
                <div className={css.Stars}>
                    <ReactStars count={5} value={vote_average / 2} size={35} edit={false} color2={'#ffd700'}/>
                </div>
            </div>
        </div>
    );
};


export {MovieListCard};

