import React, {useState} from 'react';
import './App.module.scss';
import HomePage from "./home-page/HomePage";
import {NavLink, Route, Routes} from "react-router-dom";
import Character from "./character/Character";
import Basket from "./character/basket/Basket";
import {MainType} from "./characters/Characters";
import style from './App.module.scss';

function App() {
    const [valueArr, setValueArr] = useState<MainType[]>([])
    return (
        <div className={style.app}>
            <div className={style.container}>
                <NavLink to={'/'}>main</NavLink>

                <NavLink to={'/basket'} className={style.bas}>
                    <span className={style.basket}>basket {valueArr.length>0 && valueArr.length}</span>
                </NavLink>
            </div>

            <div >
                <Routes>
                    <Route path={'/'} element={<HomePage
                        valueArr={valueArr}
                        setValueArr={setValueArr}
                       />}/>

                    <Route path={'/character/:id'} element={<Character/>}/>

                    <Route path={'/basket'} element={<Basket
                        valueArr={valueArr}
                        />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
