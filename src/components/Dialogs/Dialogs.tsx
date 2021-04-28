import React, {ComponentType} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {compose} from "redux";
import {connect} from "react-redux";
import {actions, InitialStateType} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (message: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = ({ dialogsPage, sendMessage}) => {


    const addNewMessage = (values: NewMessageFormValuesType ) => {
        sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)}
            </div>

            <div className={s.messages}>
                {dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)}

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {
            sendMessage: actions.sendMessage
        }),
    withAuthRedirect
)(Dialogs)
