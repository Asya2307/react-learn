import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";

const Navbar = (props) => {

    return <nav className={s.nav}>
        <ul>
            <li className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/profile'>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/messages'>Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/users'>Friends</NavLink>
            </li>
        </ul>
        <div>
    <span>
    </span>
            <div className={s.sidebar}>
                {/*{sideBar}*/}
            </div>
        </div>
    </nav>
};

export default Navbar;