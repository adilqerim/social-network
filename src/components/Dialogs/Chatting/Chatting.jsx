import React from "react";
import s from './Chatting.module.css'

const Chatting = () => {

    const newMessageElement = React.createRef();

    const sendMessage = () => {
        const text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.chat}>
            <div>
                <textarea ref={ newMessageElement }/>
            </div>
            <button onClick={ sendMessage }>Add post</button>
        </div>
    )
}

export default Chatting;