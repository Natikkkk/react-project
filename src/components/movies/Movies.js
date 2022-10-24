import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Pagination from '@';
import Stack from '@';

import  {movieActions} from "../../redux";
import {MovieCard} from "../movieCard/movieCard";
import css from './movies.module.css';
import {Genre} from '../genre/Genre';

const Movies = () => {
    const  {movies, search, pages, currentPage} = useSelector(state => state.movieReducer)
    const {selectdGenre} = useSelector(state => state.genresReducer)
    const  dispath = useDispatch()

    useEffect(() =>{
        if (search === '' || !search){
            dispath(movieActions.getAll({currentPage}))
        } if(selectdGenre){
            dispath(movieActions.getWithGenre({currentPage, genre:selectdGenre.toString()}))
        } else {
            dispath(movieActions.getBySearchParams({currentPage, search}))
        }
    }, [currentPage, search, selectdGenre])

    const setCurrentPage = (page) => {
        dispath(movieActions.setCurrentPage(page))
    }
    return(
        <div className={css.wrap}>
            <Genre/>
        <div className={css.moviesDiv}>
            {movies.map(movie => <MovieCard key ={movie.id} movie={movie}/>)}
        </div>
            <div>
                <Stack spacing={2}>
                    <Pagination
                        page={currentPage}
                        count={pages > 500 ? 500 : pages}
                        onChange={(_, page) => setCurrentPage(page)}
                        />
                </Stack>
            </div>
        </div>
    )
}

export {Movies}