import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    const dialogsPage = props.dialogsPage

    const dialogsElements = dialogsPage.dialogs
        .map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)
    const messagesElements = dialogsPage.messages
        .map(m => <Message key={m.id} text={m.text}/>)

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea'
                   name='newMessageBody'
                   placeholder='Enter your message'/>
            <button>Send message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;