import React from "react";
import s from './Chatting.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/store";

const Chatting = (props) => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        props.dispatch( addMessageActionCreator() )
    }

    const newMessageChange = () => {
        const text = newMessageElement.current.value;
        let action = updateMessageTextActionCreator(text);
        props.dispatch( action )
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea ref={ newMessageElement }
                          onChange={ newMessageChange }
                          value={ props.dialogsPage.newMessage }/>
            </div>
            <button onClick={ sendMessage }>Add message</button>
        </div>
    )
}

export default Chatting;