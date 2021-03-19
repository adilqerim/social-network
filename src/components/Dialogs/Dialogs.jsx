import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsPage = props.dialogsPage

    const dialogsElements = dialogsPage.dialogs
        .map(d => <DialogItem id={d.id} key={d.id} name={d.name} />)
    const messagesElements = dialogsPage.messages
        .map(m => <Message key={m.id} text={m.text}/>)

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
                          value={ dialogsPage.newMessage }/>
                </div>
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>

        </div>
    )
}

export default Dialogs;