import React from "react";

import css from '../favoritePage/favoritePage.module.css'
import {Watched} from "../../components";

const WatchedPage = () => {
    return (
        <div className={css.wrap}>
            <Watched/>
        </div>
    );
};

export {WatchedPage};