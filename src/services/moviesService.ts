import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie, IResult} from "../interfaces";
import {IRes} from "../types";

const moviesService = {
    getAll: (page: number = 1): IRes<IMovie[]> => apiService.get(urls.movies, {params: {page}}),
    search: (word: string): IRes<IMovie> => apiService.get(`${urls.search}${word}`),
    getById: (id: number): IRes<IResult> => apiService.get(`${urls.movieById}/${id}`)
}


export {moviesService}