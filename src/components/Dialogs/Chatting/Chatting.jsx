import React from "react";
import s from './Chatting.module.css'

const Chatting = (props) => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        props.store.addMessage()
    }

    const newMessageChange = () => {
        const text = newMessageElement.current.value;
        props.store.updateMessageText(text)
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea ref={ newMessageElement }
                          onChange={ newMessageChange }
                          value={ props.store.getState().dialogsPage.newMessage }/>
            </div>
            <button onClick={ sendMessage }>Add message</button>
        </div>
    )
}

export default Chatting;