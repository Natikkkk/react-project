import {Movies} from "../../components";

import css from '../favoritePage/favoritePage.module.css'

const MainePage = () => {
    return (
        <div className={css.wrap}>
            <Movies/>
        </div>
    );
};

export {MainePage};