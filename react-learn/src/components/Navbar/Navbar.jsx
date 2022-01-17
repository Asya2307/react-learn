import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : s.link} to='/profile'>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={navData => navData.isActive ? s.active : s.link} to='/messages'>Messages</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;