import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElements = props.messages
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