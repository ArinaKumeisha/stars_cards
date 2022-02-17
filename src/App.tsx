import React from 'react';
import './App.css';
import HomePage from "./home-page/HomePage";
import NavLinks from "./navlinks/Navlinks";
import {Route, Routes} from "react-router-dom";
import Character from "./character/Character";
import Basket from "./character/basket/Basket";

function App() {

    return (
        <div className="App">
            <NavLinks/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/character/:id'} element={<Character/>}/>
                <Route path={'/basket'} element={<Basket valueArr={[]}/>}/>
            </Routes>
        </div>
    );
}

export default App;
