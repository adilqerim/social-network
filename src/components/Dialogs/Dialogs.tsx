import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {compose} from "redux";
import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {AppStateType} from "../../redux/reduxStore";
import {DialogType, MessageType} from "../../Types/Types";
import {FormSubmitHandler, SubmitHandler} from "redux-form";

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Dialogs: React.FC<PropsType> = ({ dialogs, messages, sendMessage}) => {

    const addNewMessage = (values: any ) => {
        sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)}
            </div>

            <div className={s.messages}>
                {messages.map(m => <Message key={m.id} message={m.message}/>)}

                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages

    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps,
        {
            sendMessage
        }),
    withAuthRedirect
)(Dialogs)
