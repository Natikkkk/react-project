import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "../favorite/favorite.module.css";
import {WatchedMovie} from "../watchedMovie/WatchedMovie";
import {usersFilmsActions} from "../../redux";
import {ConfirmPopup} from "../confirmPopup/confirmPopup";


const Watched = () => {
    const {watched} = useSelector(state => state.usersFilmsReducer)
    const [activePopup, setActivePopup] = useState(false)
    const [movieForRemove, setMovieForRemove] = useState({})
    const dispatch = useDispatch()

    const removeFromWatched = (film) =>{
        dispatch(usersFilmsActions.addWatchedFilm(film))
    }


    return (
        <div className={css.wrap}>
            {activePopup&&<ConfirmPopup movieForRemove={movieForRemove} remove={removeFromWatched} setActivePopup={setActivePopup}/>}
            <h2>{watched.length > 0?'Watched movies':'List is empty'}</h2>
            {watched.map(movie => <WatchedMovie setMovieForRemove={setMovieForRemove} setActivePopup={setActivePopup} key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Watched};