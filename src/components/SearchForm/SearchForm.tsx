import {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {moviesService} from "../../services";
import {MovieListCard} from "../MovieListCard";
import {IResult} from "../../interfaces";
import css from "./SearchForm.module.css";

const SearchForm: FC = () => {
    const [searchedMovies, setSearchedMovies] = useState<IResult[]>(null)
    const {register, handleSubmit, reset} = useForm({
        mode: "onSubmit",
    });

    const search: SubmitHandler<any> = async ({searchWords}) => {
        moviesService.search(searchWords).then(({data}) => {
            setSearchedMovies(data.results)
        })
        reset();
    };

    return (
        <div className={css.MainDiv}>
            <div className={css.FormDiv}>
                <form onSubmit={handleSubmit(search)}>
                    <input className={css.FormInput} type="text"
                           placeholder={'Find movie'} {...register('searchWords')}/>
                    <button className={css.FormBtn}>Search</button>
                </form>
            </div>
            {searchedMovies && searchedMovies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchForm};