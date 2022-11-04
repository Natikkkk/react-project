const usersFilmsService = {
    addFavoriteFilm:(films, ids)=>{
        localStorage.setItem('favorite', JSON.stringify(films))
        localStorage.setItem('favoriteIds', JSON.stringify(ids))
    },
    getFavoriteFilms:()=>{
        return  JSON.parse(localStorage.getItem('favorite'))
    },
    getFavoriteFilmsIds:()=>{
        return  JSON.parse(localStorage.getItem('favoriteIds'))
    },
    addWatchedFilm:(films, ids)=>{
        localStorage.setItem('watched', JSON.stringify(films))
        localStorage.setItem('watchedIds', JSON.stringify(ids))
    },
    getWatchedFilms:()=> {
        return JSON.parse(localStorage.getItem('watched'))
    },
    getWatchedFilmsIds:()=> {
        return JSON.parse(localStorage.getItem('watchedIds'))
    },
    getUserName:()=>{
        return JSON.parse(localStorage.getItem('userName'))
    },
    setUserName:(name)=>{
        localStorage.setItem('userName', JSON.stringify(name))
    }
}

export {usersFilmsService}