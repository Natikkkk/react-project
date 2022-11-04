import {createSlice} from "@reduxjs/toolkit";

import {usersFilmsService} from "../../services";

let a = (elem) =>{
    if (elem === null ){
        return []
    }
    return elem
}

const initialState = {
    favorite:a(JSON.parse(localStorage.getItem('favorite'))),
    watched:a(JSON.parse(localStorage.getItem('watched'))),
    favoriteIds: a(JSON.parse(localStorage.getItem('favoriteIds'))),
    watchedIds:a(JSON.parse(localStorage.getItem('watchedIds'))),
    userName:localStorage.getItem('userName'),
    error:null,
    isLoading:false
}



const usersFilmsSlice = createSlice({
    name:'usersFilmsSlice',
    initialState,
    reducers:{
        addFavoriteFilm:(state, action)=>{
            if (state.favoriteIds.includes(action.payload.id) === false){
                usersFilmsService.addFavoriteFilm([...state.favorite, action.payload], [...state.favoriteIds, action.payload.id])
            }else{
                const index = state.favorite.findIndex(film => film.id === action.payload.id)
                state.favorite.splice(index, 1)
                state.favoriteIds.splice(index, 1)
                usersFilmsService.addFavoriteFilm([...state.favorite], [...state.favoriteIds])
            }
            state.favorite = usersFilmsService.getFavoriteFilms()
            state.favoriteIds = usersFilmsService.getFavoriteFilmsIds()
        },
        addWatchedFilm:(state, action)=>{
            if (state.watchedIds.includes(action.payload.id) === false){
                usersFilmsService.addWatchedFilm([...state.watched, action.payload], [...state.watchedIds, action.payload.id])
            }
            else{
                const index = state.watched.findIndex(film => film.id === action.payload.id)
                state.watched.splice(index, 1)
                state.watchedIds.splice(index, 1)
                usersFilmsService.addWatchedFilm([...state.watched], [...state.watchedIds])
            }
            state.watched = usersFilmsService.getWatchedFilms()
            state.watchedIds = usersFilmsService.getWatchedFilmsIds()
        },
        setUserName:(state, action)=>{
            localStorage.setItem('userName', action.payload)
            state.userName = localStorage.getItem('userName')
        }
    },
    extraReducers:{}
})

const {reducer:usersFilmsReducer, actions:{addFavoriteFilm, addWatchedFilm, setUserName}} = usersFilmsSlice

const usersFilmsActions = {
    addWatchedFilm,
    addFavoriteFilm,
    setUserName
}

export {usersFilmsActions,usersFilmsReducer}