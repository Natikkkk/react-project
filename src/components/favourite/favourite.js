import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {FavoriteMovie} from "../favoriteMovie/FavoriteMovie";
import css from './favorite.module.css'
import {ConfirmPopup} from "../confirmPopup/confirmPopup";
import {usersFilmsActions} from "../../redux";

const Favorite = () => {
    const {favorite} = useSelector(state => state.usersFilmsReducer)
    const [activePopup, setActivePopup] = useState(false)
    const [movieForRemove, setMovieForRemove] = useState({})
    const dispatch = useDispatch()

    const removeFromFavorite = (film) =>{
        dispatch(usersFilmsActions.addFavoriteFilm(film))
    }

    return (
        <div className={css.wrap}>
            {activePopup&&<ConfirmPopup movieForRemove={movieForRemove} remove={removeFromFavorite} setActivePopup={setActivePopup}/>}
            <h2>{favorite.length > 0?'Favorite movies':'List is empty'}</h2>
            {favorite.map(movie => <FavoriteMovie setMovieForRemove={setMovieForRemove} setActivePopup={setActivePopup} key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Favorite};