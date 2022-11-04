import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import css from "../favoriteMovie/favoriteMovie.module.css";

const WatchedMovie = ({movie, setMovieForRemove, setActivePopup}) => {
    const {poster_path,title, overview, your_mark} = movie


    return (
        <div className={css.card}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div className={css.infoBlock}>
                <h3>{title}</h3>
                <p>{overview}</p>
                <h4>Your mark</h4>
                <Stack spacing={1}>
                    <Rating name="half-rating-read"  defaultValue={your_mark} precision={0.5} readOnly />
                </Stack>
            </div>
            <div className={css.btnDiv}>
                <button onClick={()=>{
                    setMovieForRemove(movie)
                    setActivePopup(true)
                }}>Remove from watched</button>
            </div>
        </div>
    );
};


export {WatchedMovie};