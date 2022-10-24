import  axios from "axios";

import  {_accessToken} from "../configs/tocens";
import {baseURL} from "../configs"

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${_accessToken}`

    return config
});

export {axiosService}
