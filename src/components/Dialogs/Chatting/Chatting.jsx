import React from "react";
import s from './Chatting.module.css'

const Chatting = (props) => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        props.addMessage()
    }

    const newMessageChange = () => {
        const text = newMessageElement.current.value;
        props.updateMessageText(text)
        console.log(text)
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea ref={ newMessageElement } onChange={ newMessageChange } value={ props.newMessage }/>
            </div>
            <button onClick={ sendMessage }>Add post</button>
        </div>
    )
}

export default Chatting;