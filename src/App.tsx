import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Characters from "./characters/Characters";
import Character from "./character/Character";
import Navlinks from "./navlinks/Navlinks";

function App() {
    return (
        <div className="App">
            <Navlinks/>
            <Routes>
                <Route path={'/characters'} element={<Characters/>}/>
                <Route path={'/'} element={<Characters/>}/>
                <Route path={'/character/:id'} element={<Character/>}/>
            </Routes>
        </div>
    );
}

export default App;
