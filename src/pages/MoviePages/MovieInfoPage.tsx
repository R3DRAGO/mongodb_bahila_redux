import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components/MovieDetails/MovieDetails";
import css from "./MovieInfoPage.module.css";


const MovieInfoPage = () => {
    const {id} = useParams();
    return (
        <div className={css.MovieInfoPage}>
            <MovieDetails key={id} id={+id}/>
        </div>
    );
};

export {MovieInfoPage};