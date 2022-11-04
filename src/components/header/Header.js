import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {faXmark, faSearch, faCircleUser} from '@fortawesome/free-solid-svg-icons'

import css from './header.module.css'
import {movieActions} from "../../redux";
import {HeaderMenu} from "../headerMenu/HeaderMenu";



const Header = ({setActivePopup}) => {
    const {userName} = useSelector(state => state.usersFilmsReducer)
    const {search} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const changeValue = (value) => {
        dispatch(movieActions.setSearch(value))
    }



    return (
        <div className={css.wrap}>
            <header className={css.header}>
                <div onClick={()=>navigate('/maine/films')} className={css.logo}>Nataliia Ozerova</div>
                <HeaderMenu/>
                <div className={css.inputBlock} >
                    <input type="text" required="required" value={search} onChange={(elem)=>changeValue(elem.target.value)}/>
                    <span>Find</span>
                    <div className={css.searchIcon}>{search?<FontAwesomeIcon onClick={()=>changeValue('')} icon={faXmark} />:<FontAwesomeIcon icon={faSearch} />}</div>
                    <i></i>
                </div>
                <div className={css.userDiv}>
                    <FontAwesomeIcon className={css.userIcon} icon={faCircleUser} />
                    {userName?<p onClick={()=>setActivePopup(true)}>{userName}</p>:<p onClick={()=>setActivePopup(true)}>User</p>}
                </div>
            </header>
        </div>
    );
};

export {Header};