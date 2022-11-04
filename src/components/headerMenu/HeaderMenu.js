import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLocation, useNavigate} from "react-router-dom";
import {faFilm, faHeart, faEye, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'

import css from './headerMenu.module.css'
import {useTheme} from "../../hooks";

const HeaderMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {theme, setTheme} = useTheme()

    const changeTheme = () =>{
        if (theme === 'dark'){
            setTheme('light')
            localStorage.setItem('appTheme', 'light')
        }else {
            setTheme('dark')
            localStorage.setItem('appTheme', 'dark')
        }
    }

    const active = (n) =>{
        switch (n) {
            case 1:
                window.scrollTo({
                    top:0
                })
                navigate('/maine/films')
                break
            case 2:
                window.scrollTo({
                    top:0
                })
                navigate('/maine/favorite')
                break
            case 3:
                window.scrollTo({
                    top:0
                })
                navigate('/maine/watched')
                break
        }

    }

    return (
        <div className={css.navigate}>
            <ul>
                <li onClick={() => active(1)}
                    className={(location.pathname === '/maine/films') ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faFilm}/></span>
                        <span className={css.text}>Films</span>
                    </a>
                </li>
                <li onClick={() => active(2)}
                    className={location.pathname === '/maine/favorite' ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faHeart}/></span>
                        <span className={css.text}>Favorite</span>
                    </a>
                </li>
                <li onClick={() => active(3)}
                    className={location.pathname === '/maine/watched' ? css.active : undefined}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faEye}/></span>
                        <span className={css.text}>Viewed</span>
                    </a>
                </li>
                {(location.pathname === '/maine/films' || location.pathname === '/maine/favorite' || location.pathname === '/maine/watched') &&
                    <div className={css.indicator}></div>}

            </ul>
            <div>
                <button className={css.switchBtn} onClick={changeTheme}>
                    <span className={theme === 'dark'?css.btnTogleDark:css.btnTogleLight}>{theme === 'light'?<FontAwesomeIcon icon={faSun} />:<FontAwesomeIcon icon={faMoon} />}</span>
                </button>
            </div>
        </div>
    );
};

export {HeaderMenu};