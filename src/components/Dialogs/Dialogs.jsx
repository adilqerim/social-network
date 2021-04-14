import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Element from "../common/FormsControls/FormsControls";


const maxLength100 = maxLengthCreator(100)

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

const Textarea = Element("textarea");

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newMessageBody'
                   placeholder='Enter your message'
                   validate={[required, maxLength100]}/>
            <button>Send message</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;