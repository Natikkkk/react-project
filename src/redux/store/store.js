import  {combineReducers} from " redux";
import {configureStore} from "@reduxjs/toolkit";

import {movieReducer, genresReducer} from "../index";


const rootReducer = combineReducers({
    movieReducer,
    genresReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}