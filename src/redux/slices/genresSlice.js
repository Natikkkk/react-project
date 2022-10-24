import  {createSlice, createAsyncThunk} from "@redxjs/toolkit";

import {genresService} from "../../services";

const initialState ={
    genres:[],
    selectedGenre:null,
    error:null,
    isLoading:false
}

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) =>{
        try {
            const {data} = await genresService.getGenres()
            return data
        }catch (e){
            console.log('eror');
            return rejectWithValue(e.response.data)
        }
    }
)

const  genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
        setGenre:(state, action) =>{
            state.selectedGenre = action.payload
            console.log(state.selectedGenre);
        }
    },
    extraReducers:builder =>
        builder.addCase(getGenres.fulfiled, (state, action)=>{
            state.genres = action.payload.genres
        })

})

const {reducer:genresReducer, actions:{setGenre}} = genresSlice

const genresActions = {
    setGenre,
    setGenres
}

export {genresReducer, genresActions}