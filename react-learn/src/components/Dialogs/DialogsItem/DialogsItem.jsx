import React from "react";
import s from './DialogsItem.module.css'
import {MemoryRouter, NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialogs__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem
