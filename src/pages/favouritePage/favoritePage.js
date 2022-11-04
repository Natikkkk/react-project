import css from './favoritePage.module.css'
import {Favorite} from "../../components";

const FavoritePage = () => {



    return (
        <div className={css.wrap}>
            <Favorite/>
        </div>
    );
};

export {FavoritePage};