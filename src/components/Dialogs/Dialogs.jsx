import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Chatting from "./Chatting/Chatting";


const Dialogs = (props) => {

    const dialogsElements = props.store.getState().dialogsPage.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElements = props.store.getState().dialogsPage.messages
        .map(m => <Message text={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <Chatting store={props.store}/>
            </div>

        </div>
    )
}

export default Dialogs;