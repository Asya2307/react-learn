import React from "react";
import s from './Dialogs.module.css';
import {MemoryRouter, NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsData = [
        {
            id: 1,
            name: 'Анастасия'
        },
        {
            id: 2,
            name: 'Валера'
        },
        {
            id: 3,
            name: 'Владимир'
        }
    ]

    let messagesData = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'What are you doing'
        }
    ];

    let dialogs = dialogsData.map(
        d => <DialogItem name={d.name} id={d.id} />
    );

    let message = messagesData.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapper}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>
                    {message}
                </div>
            </div>
        </div>
    )
};

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialogs__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Dialogs
