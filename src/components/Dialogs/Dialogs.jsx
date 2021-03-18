import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} />)
    const messagesElements = props.messages
        .map(m => <Message text={m.text}/>)

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        const text = e.target.value;
        props.messageUpdate(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                <textarea onChange={ onNewMessageChange }
                          value={ props.newMessage }/>
                </div>
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>

        </div>
    )
}

export default Dialogs;