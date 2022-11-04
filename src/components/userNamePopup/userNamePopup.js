import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {usersFilmsActions} from "../../redux";
import css from './userNamePopup.module.css'

const UserNamePopup = ({setActivePopup}) => {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const submit =(value)=>{
        dispatch(usersFilmsActions.setUserName(value.userName))
        setActivePopup(false)
    }

    return (
        <div className={css.wrap} onClick={()=>setActivePopup(false)}>
            <div className={css.content} onClick={e=>e.stopPropagation()}>
                <h3>Enter your name</h3>
                <form onSubmit={handleSubmit(submit)} className={css.form}>
                    <div className={css.form}>
                        <input type="text" required="required" {...register('userName')}/>
                        <span>Name</span>
                        <i></i>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
};

export {UserNamePopup};