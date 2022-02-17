import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navlinks.module.scss';

const NavLinks = () => {
    return (
        <div className={style.container}>
            <NavLink to={'/'}>main</NavLink>
            <NavLink to={'/basket'}>basket</NavLink>
        </div>
    );
};

export default NavLinks;