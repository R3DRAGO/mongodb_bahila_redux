import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";


import {IResult} from "../../interfaces";
import {Pagination} from "../Pagination";
import {MovieListCard} from "../MovieListCard";
import css from "./SelectedGenres.module.css";
import {genresService} from "../../services";
import {Stack} from "@mui/material";

interface IProps {
    id: string
}

const SelectedGenres: FC<IProps> = ({id}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = +query.get('page')
    const [movies, setMovies] = useState<IResult[]>(null)
    useEffect(() => {
        genresService.getById(+id, +query.get('page')).then(({data}) => {
            setMovies(data.results)
            console.log(data)
        })
    }, [id, page, query]);
    return (
        <div className={css.Main}>
            {movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <div className={css.Pagination}>
                <Pagination totalCount={500 * 20} pageSize={20} currentPage={+query.get('page')} onPageChange={(page) =>
                    setQuery((value) => {
                        value.set('page', page.toString());
                        return value;
                    })
                }/>
            </div>
        </div>
    );
};

export {SelectedGenres};