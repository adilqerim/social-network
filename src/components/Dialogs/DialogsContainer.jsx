import React from 'react'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReduce";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch( addMessageActionCreator() )
    }

    const messageUpdate = (text) => {
        let action = updateMessageTextActionCreator(text);
        props.store.dispatch( action )
    }

    return (
        <Dialogs  dialogs={state.dialogsPage.dialogs}
                  messages={state.dialogsPage.messages}
                  newMessage={state.dialogsPage.newMessage}
                  sendMessage={sendMessage}
                  messageUpdate={messageUpdate}
        />
    )

}

export default DialogsContainer;