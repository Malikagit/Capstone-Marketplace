import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from '../components/Header/Header';
import Homepage from '../components/Homepage/Homepage';
import Login from '../components/Login';
import Favoris from '../components/Favoris';
import Categories from '../components/CategoriesBox';



function Routers() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/favoris" element={<Favoris />}></Route>
                {/* <Route exact path="/categories" element={<Categories />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;