import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/MessagesItem";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogs = props.state.dialogsData.map(
        d => <DialogsItem name={d.name} id={d.id} />
    );

    let message = props.state.messagesData.map(m => <MessagesItem id={m.id} message={m.message} />);

    let textMessage =  React.createRef();

    let addMessage = () => {
        props.dispatch(
            addMessageActionCreator()
        )
    };

    let changeMessage = () => {
        let text=  textMessage.current.value;
        props.dispatch(
            changeMessageActionCreator(text)
        );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapper}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>
                    {message}
                </div>
                <div>
                    <textarea ref={textMessage} onChange={changeMessage} value={props.state.newMessageText} placeholder='Enter your message'/>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
