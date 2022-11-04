import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import {genresActions, movieActions} from "../../redux";
import {MovieCard} from "../movieCard/MovieCard";
import css from './movies.module.css'
import {Genre} from "../genre/Genre";





const Movies = () => {
    const {movies, search, pages, currentPage, isLoading, error} = useSelector(state => state.movieReducer)
    const {selectedGenre} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if ((search === '' || !search) &&  !selectedGenre){
            dispatch(movieActions.getAll({currentPage}))
        }else if(selectedGenre && (search === '' || !search)){
            dispatch(movieActions.getWithGenre({currentPage, genre:selectedGenre.toString()}))
        }else {
            dispatch(genresActions.setGenre(null))
            dispatch(movieActions.getBySearchParams({currentPage, search}))
        }
    },[currentPage, search, selectedGenre])

    const setCurrentPage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
        window.scrollTo({
            top:0
        })
    }

    return (

        <div className={css.wrap}>
            <Genre/>
            {isLoading &&
                <Box sx={{width: '100%', height: '700px'}}>
                    <Skeleton width="100%" height="700px">
                        <Typography>.</Typography>
                    </Skeleton>
                </Box>
            }
            {error &&
                <div className={css.error}>
                    Something went wrong
                </div>
            }
            <div className={css.moviesDiv}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.paginationDiv}>
                <Stack spacing={2}>
                    <Pagination
                        page={currentPage}
                        count={pages > 500 ? 500 : pages}
                        onChange={(_, page) => setCurrentPage(page)}
                    />
                </Stack>
            </div>
        </div>
    );
};

export {Movies};
