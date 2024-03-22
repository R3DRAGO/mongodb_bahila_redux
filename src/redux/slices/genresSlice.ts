import {AxiosResponse} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";
import {IGenre, IMovie} from "../../interfaces";

interface GenresState {
    loading: boolean;
    genresList: IGenre[];
    genreMovies: IMovie[];
}

const initialState: GenresState = {
    loading: false,
    genresList: [],
    genreMovies: []
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data: {genres}} = await genresService.getAll();
            return genres;
        } catch (e: any) {
            if (e.response) {
                return rejectWithValue(e.response.data.errors);
            } else {
                return rejectWithValue("An error occurred without a response");
            }
        }
    }
);

const getById = createAsyncThunk(
    'genresSlice/getById',
    async ({id, page}: { id: number, page: number }, {rejectWithValue}) => {
        try {
            const response = await genresService.getById(id, page);
            const responseData = response as AxiosResponse<IMovie>;
            return responseData.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data.errors);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.genresList = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(action.payload)) {
                    state.genreMovies = action.payload;
                } else {
                    state.genreMovies = [action.payload];
                }
            })
});


const {reducer: genresReducer} = genresSlice;

const genresAction = {
    getAll,
    getById
}

export {
    genresAction,
    genresReducer
}
