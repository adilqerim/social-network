import React from "react";
import s from './Chatting.module.css'

const Chatting = (props) => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE'})
    }

    const newMessageChange = () => {
        const text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-MESSAGE-TEXT', newMessage: text})
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