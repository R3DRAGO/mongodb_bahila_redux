import {configureStore} from "@reduxjs/toolkit";

import {genresReducer, movieReducer} from "./slices";


const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genresReducer
    }
});


export {store}