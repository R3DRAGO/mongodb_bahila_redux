import React, {FC, useEffect, useState} from "react";


import {IGenres} from "../../interfaces";
import {Genre} from "../../components";
import css from "./GenrePage.module.css"
import {genresService} from "../../services";


const GenresPage: FC = () => {
    const [data, setData] = useState<IGenres>(null);

    useEffect(() => {
        genresService.getAll().then(({data}) => {
            setData(data)
        }).catch(error => {
            console.error("Помилка отримання фільмів:", error);
        });
    }, []);
    return (
        <div className={css.Genre}>
            <div className={css.Data}>
                {data?.genres.map((genre) => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};


export {GenresPage};
