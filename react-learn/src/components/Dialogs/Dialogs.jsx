import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./Message/MessagesItem";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogs = state.dialogsData.map(
        d => <DialogsItem key={d.id} name={d.name} id={d.id} />
    );

    let message = state.messagesData.map(m => <MessagesItem id={m.id} key={m.id} message={m.message} />);

    let newMessageBody = state.newMessageText;

    let textMessage =  React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let changeMessage = () => {
        let text=  textMessage.current.value;
        props.changeMessage(text)
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
                    <textarea ref={textMessage} onChange={changeMessage} value={newMessageBody} placeholder='Enter your message'/>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
