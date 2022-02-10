import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Characters from "./characters/Characters";
import Character from "./character/Character";

function App() {
    return (
        <div className="App">
           {/* <NavLink to={'/characters'}>characters</NavLink>*/}
            <Routes>
                <Route path={'/characters'} element={<Characters/>}/>
                <Route path={'/'} element={<Characters/>}/>
                <Route path={'/character'} element={<Character/>}/>
            </Routes>
        </div>
    );
}

export default App;
