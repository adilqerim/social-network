import React from "react";
import s from './Chatting.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReduce";

const Chatting = (props) => {

    const onSendMessageClick = () => {
        props.dispatch( addMessageActionCreator() )
    }

    const onNewMessageChange = (event) => {
        const text = event.target.value;
        let action = updateMessageTextActionCreator(text);
        props.dispatch( action )
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea onChange={ onNewMessageChange }
                          value={ props.dialogsPage.newMessage }/>
            </div>
            <button onClick={ onSendMessageClick }>Add message</button>
        </div>
    )
}

export default Chatting;