import {useState} from "react";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import css from './ratingPopup.module.css'
import {usersFilmsActions} from "../../redux";

const RatingPopup = ({film,setActive,dispatch}) => {
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const setMarkAndAdd = (n) =>{
        dispatch(usersFilmsActions.addWatchedFilm({...film, your_mark:n}))
        setActive(false)
    }

    return (
        <div className={css.modal} onClick={()=>setActive(false)}>
            <div className={css.modalContent} onClick={e=>e.stopPropagation()}>
                <h3>Rate the movie</h3>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                            setMarkAndAdd(newValue)

                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.8 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
            </div>
        </div>
    );
};

export {RatingPopup};