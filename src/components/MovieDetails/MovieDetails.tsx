import {FC, useEffect, useState} from 'react';
import {Badge, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
import ReactStars from 'react-stars'

import {moviesService} from "../../services";
import {IResult} from "../../interfaces";
import {urls} from "../../constants";
import css from "./MovieDetails.module.css"
import {GenreBadge} from "../GenreBadge";


interface IProps {
    id: number
}

const MovieDetails: FC<IProps> = ({id}) => {
    const [movie, setMovie] = useState<IResult | null>(null);
    useEffect(() => {
        moviesService.getById(id).then(({data}) => {
            setMovie(data)
        })
    }, [id]);


    return (
        <div className={css.Main}>
            {movie ? (
                <>
                    <div className={css.MovieDetails}>
                        <img
                            className={css.Poster}
                            src={`${urls.poster}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className={css.Badge}>
                            {movie?.genres.map((genre) => (
                                <Link key={genre.id} to={`/genres/${genre.id}`} className={css.BadgeLink}>
                                    <Badge
                                        color="success"
                                        overlap="circular"
                                        className={css.Genres_Badge}
                                        badgeContent={
                                            <Typography className={css.BG} variant="body2" style={{fontSize: "14px"}}>
                                                {genre.name}
                                            </Typography>
                                        }
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={css.Info}>
                        <div>
                            <h1>Title</h1>
                        </div>
                        <div className={css.Title}>
                            {movie.title}
                        </div>
                        <div>
                            <h3>Language</h3>
                        </div>
                        <div className={css.Language}>
                            {movie.original_language.toUpperCase()}
                        </div>
                        <div>
                            <h3>Genres</h3>
                        </div>
                        <div className={css.Genres}>
                            {movie?.genres.map((genre) => (
                                <Link
                                    key={genre.id}
                                    to={`/genres/${genre.id}`}

                                >
                                    <GenreBadge genreName={genre.name}/>
                                </Link>
                            ))}
                        </div>
                        <div>
                            <h3>Release Date</h3>
                        </div>
                        <div className={css.Release}>
                            {movie.release_date}
                        </div>
                        <div>
                            <h3>Rating</h3>
                        </div>
                        <div>
                            <ReactStars count={5} value={movie.vote_average / 2} size={40}
                                        edit={false}
                                        color2={'#ffd700'}/>
                        </div>
                    </div>
                    <div className={css.Description}>
                        <div>
                            <h3>Description:</h3>
                        </div>
                        <div>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
};

export {MovieDetails};