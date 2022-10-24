import React, {useEffect} from "react";
import {useDispath, useSelector} from 'react-redux';
import slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {genresActions, movieActions} from "../../redux"
import css from './genre.module.css'
import {settings} from './settingsForSlider'

const Genre = () => {
    const  dispatch = useDispath()
    const {genres, selectedGenre} = useSelector(state => state.genresReduser)

    useEffect(()=>{
        dispatch(genresActions.getGenres())
    },[])

    const setGenre = (id) => {
        dispatch(genresActions.getGenres(id))
        if(id !== selectedGenre){
            dispatch(movieActions.setCurrentPage(1))

        }
    }

    return(
        <div className={css.genresDiv}>
            <slider {...settings}>
                <div onClick={()=>setGenre(null)} className={(selectedGenre===null)?css.genreActive:css.genre}>All</div>
                {genres?.map
                (genre =>
                    <div key={genre.id} onClick={() => setGenre(genre.id)}
                         className={(selectedGenre === genre.id) ? css.genreActive : css.genre}>
                        {genre.name}
                    </div>
                )
                }
            </slider>
        </div>
    );
};

 export {Genre};