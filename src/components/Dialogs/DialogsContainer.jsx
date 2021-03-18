import React from 'react'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReduce";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()

                const sendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const messageUpdate = (text) => {
                    let action = updateMessageTextActionCreator(text);
                    store.dispatch(action)
                }

                return <Dialogs dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessage={state.dialogsPage.newMessage}
                                sendMessage={sendMessage}
                                messageUpdate={messageUpdate}
                />
            }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;