import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {movieReducer, genresReducer, usersFilmsReducer} from "../index";


const rootReducer = combineReducers({
    movieReducer,
    genresReducer,
    usersFilmsReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}