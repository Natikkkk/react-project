import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {useSelector} from "react-redux";


import css from './movieCard.module.css'
import {useNavigate} from "react-router-dom";


const MovieCard = ({movie}) => {
    const {genres} = useSelector(state => state.genresReducer)
    const {title,vote_average, poster_path,genre_ids,release_date} = movie
    const navigate = useNavigate()

    const createGenre = (id) =>{
        const genre = genres.find(item => item.id === id)
        return genre.name
    }

    const choseFilm = (id) =>{
        window.scrollTo({
            top:0
        })
        navigate(`/maine/movie/${id}`)
    }

    return (
        <div onClick={()=>choseFilm(movie.id)} className={css.card}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>
                <div className={css.movieInfo}>
                    <div>
                        <span className={css.title}>Name</span>
                        <span className={css.descript}>{title}</span>
                    </div>
                    <div>
                        <span className={css.title}>Release</span>
                        <span className={css.descript}>{release_date}</span>
                    </div>
                    <div>
                        <span className={css.title}>Genres</span>
                        <div className={css.genres}>
                            {genre_ids.map((genre, index)=> <span key={index} className={css.descript}>{createGenre(genre)}</span>)}
                        </div>
                    </div>
                    <div className={css.rating}>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read"  defaultValue={vote_average / 2} precision={0.5} size={'small'} readOnly />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieCard};
export {MovieCard};