import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/MessagesItem";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map(
        d => <DialogsItem name={d.name} id={d.id} />
    );

    let message = props.state.messagesData.map(m => <MessagesItem id={m.id} message={m.message} />);


    let sendMessage = () => {
        let text = textMessage;
        alert(text)
    }

    let textMessage =  React.createRef();


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__wrapper}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div className={s.messages__item}>
                    {message}
                </div>
                <textarea ref={textMessage}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
};



export default Dialogs
