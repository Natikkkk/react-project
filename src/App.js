import {Navigate, Route, Routes} from "react-router-dom";

import {MaineLayout} from "./layouts/maineLayout";
import {MainePage, FilmInfoPage, FavoritePage, WatchedPage} from "./pages";


function App() {


    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/maine'}/>}/>
            <Route path={'/maine'} element={<MaineLayout/>}>
                <Route path={'/maine'} element={<Navigate to={'/maine/films'}/>}/>
                <Route path={'films'} element={<MainePage/>}/>
                <Route path={'movie/:id'} element={<FilmInfoPage/>}/>
                <Route path={'favorite'} element={<FavoritePage/>}/>
                <Route path={'watched'} element={<WatchedPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;