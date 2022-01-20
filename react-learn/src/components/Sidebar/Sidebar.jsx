import React from "react";
import s from './../Navbar/Navbar.module.css'

const SideBar = (props) => {
    return (
        <div className={s.sidebar__item}>
            <img src={props.avatar} />
            <span>{props.name}</span>
        </div>
    )
}

export default SideBar