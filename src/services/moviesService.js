import {axiosService} from "./axiosService";
import {urls} from "../configs";

const moviesService = {
    getAll:(page)=>axiosService.get(`${urls.movies}?page=${page}`),
    getBySearchParams:(page, search)=>axiosService.get(`${urls.searchMovie}?&page=${page}&query=${search}`),
    getWithGenres:(page, genre)=>axiosService.get(`${urls.movies}?page=${page}&with_genres=${genre}`),
    getMovieById:(id)=>axiosService.get(`${urls.movieById}/${id}`)
}

export {moviesService}