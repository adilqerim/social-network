import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElements = props.dialogsPage.messages
        .map(m => <Message text={m.text}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>   
        </div>
    )
}

export default Dialogs;