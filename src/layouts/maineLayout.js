import {useState} from "react";
import {Outlet} from "react-router-dom";

import {Footer, Header, UserNamePopup} from "../components";
import css from './maineLayout.module.css'

const MaineLayout = () => {
    const [activePopup, setActivePopup] = useState(false)

    return (
        <div className={css.wrapper}>
            {activePopup&&<UserNamePopup setActivePopup={setActivePopup}/>}
            <Header setActivePopup={setActivePopup}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MaineLayout};