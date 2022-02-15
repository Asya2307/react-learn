import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";

const Navbar = (props) => {
    // let state =  props.sidebar.sidebar;
    // let sideBar = state.map(s => <SideBar avatar={s.avatar} name={s.name} />)

    return <nav className={s.nav}>
        <ul>
            <li className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/profile'>Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={navData => navData.isActive ? s.active : s.link} to='/messages'>Messages</NavLink>
            </li>
        </ul>
        <div>
    <span>
        Friends
    </span>
            <div className={s.sidebar}>
                {/*{sideBar}*/}
            </div>
        </div>
    </nav>
};

export default Navbar;