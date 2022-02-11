import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navlinks.module.scss'
const Navlinks = () => {
    return (
        <div className={style.container}>
            <NavLink to={'/'}>main</NavLink>
        </div>
    );
};

export default Navlinks;