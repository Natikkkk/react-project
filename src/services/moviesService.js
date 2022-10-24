import  {axiosService} from "./axiosService";
import  {urls} from "../configs"

const moviesService ={
    getAll: (page)=>axiosservice.get (` $(urls.movies}?page=${page})`),
    getBysearchParams: (page, search)=>axiosService.get ( `$(urls.searchMovie}?&page=$(page}&query=${search}`),
    getwithGenres: (page, genre)=>axiosservice.get (`${urls.movies}?page=${page}&with_genres=${genre}`)

}
export {moviesService}