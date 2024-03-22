import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";
import {IMovie, IResult} from "../../interfaces";

interface MoviesState {
    loading: boolean;
    movies: IMovie[];
    movieById: IResult | null;
    searchMovies: IResult[];
}


const initialState: MoviesState = {
    loading: false,
    movies: [],
    movieById: null,
    searchMovies: [],
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page: number, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data.errors);
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}: { id: number }, {rejectWithValue}) => {
        try {
            const response = await moviesService.getById(id);
            const {data} = response;
            return data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data.errors);
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({searchWords}: { searchWords: string }, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.search(searchWords);
            return data.results;
        } catch (e: any) {
            return rejectWithValue(e.response?.data.errors);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.movieById = action.payload;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.searchMovies = action.payload;
            })
})

const {reducer: movieReducer} = moviesSlice;

const movieAction = {
    getAll,
    searchMovie,
    getById,
}

export {
    movieReducer,
    movieAction
}