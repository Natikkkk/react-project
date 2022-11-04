import React from "react";

import {Movie} from "../../components";
import css from '../favoritePage/favoritePage.module.css'

const FilmInfoPage = () => {
    return (
        <div className={css.wrap}>
            <Movie/>
        </div>
    );
};

export {FilmInfoPage};