import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {GenresPage, MovieInfoPage, MoviesPage, SearchMoviePage, SelectedGenresPage} from "./pages";
import {MainLayout} from "./layouts";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesPage/>
            },
            {
                path: 'movies/:id', element: <MovieInfoPage/>
            },
            {
                path: 'genres', element: <GenresPage/>
            },
            {
                path: 'genres/:id', element: <SelectedGenresPage/>
            },
            {
                path: 'search', element: <SearchMoviePage/>
            },
            {
                path: 'search/:id', element: <MovieInfoPage/>
            }
        ]
    }
]);

export {
    router
}