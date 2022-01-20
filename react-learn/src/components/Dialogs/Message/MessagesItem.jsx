import React from "react";
import s from './MessageItem.module.css'
import {MemoryRouter, NavLink} from "react-router-dom";

const MessagesItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default MessagesItem
