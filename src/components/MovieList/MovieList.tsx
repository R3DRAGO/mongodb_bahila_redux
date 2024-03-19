import {FC, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {MovieListCard} from "../MovieListCard";
import {moviesService} from "../../services";
import {Pagination} from "../Pagination";
import css from "./MovieList.module.css";

const MovieList: FC = () => {
    const [data, setData] = useState<IMovie>(null);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')


    useEffect(() => {
        moviesService.getAll(+page).then(({data}) => {
            setData(data as any as IMovie)
        }).catch(error => {
            console.error("Помилка отримання фільмів:", error);
        });
    }, [page]);
    return (
        <div className={css.BgMovies}>
            <div className={css.Movies}>
                {
                    data?.results.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)
                }
                {
                    data ?
                        <div className={css.Pagination}>
                            <Pagination totalCount={500 * 20} pageSize={20} currentPage={+page} onPageChange={(page) =>
                                setQuery((value) => {
                                    value.set('page', page.toString());
                                    return value;
                                })
                            }
                            />
                        </div>

                        : null
                }
            </div>
        </div>
    );
};

export {MovieList};