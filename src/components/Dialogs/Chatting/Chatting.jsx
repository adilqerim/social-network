import React from "react";
import s from './Chatting.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/store";

const Chatting = (props) => {

    const newMessageElement = React.createRef();

    const onSendMessageClick = () => {
        props.dispatch( addMessageActionCreator() )
    }

    const onNewMessageChange = (event) => {
       // const text = newMessageElement.current.value;
        const text = event.target.value;
        let action = updateMessageTextActionCreator(text);
        props.dispatch( action )
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea ref={ newMessageElement }
                          onChange={ onNewMessageChange }
                          value={ props.dialogsPage.newMessage }/>
            </div>
            <button onClick={ onSendMessageClick }>Add message</button>
        </div>
    )
}

export default Chatting;