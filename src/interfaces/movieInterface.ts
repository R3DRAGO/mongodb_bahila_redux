export interface IMovie {
    page: number,
    results: IResult[],
    total_pages: number,
    total_results: number,
}

export interface IResult {
    adult: boolean,
    poster_path: string,
    id: number,
    original_language: string,
    title: string,
    overview: string,
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genre_ids: IGenres[],
    genres: IGenre[],
}

export interface IGenres {
    genres: IGenre[],
}

export interface IGenre {
    id: number
    name: string
}