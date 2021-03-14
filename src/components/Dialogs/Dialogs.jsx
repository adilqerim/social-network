import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={ path }> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{ props.text }</div>
    )
}

const dialogs = [
    {id: 1, name: 'Mops'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valya'},
    {id: 4, name: 'Alla'},
    {id: 5, name: 'Dima'}
]

const messages = [
    {id: 1, text: 'Hello)'},
    {id: 2, text: 'Long to no see!'},
    {id: 3, text: 'How you doing?'},
    {id: 4, text: 'Hey, I am great'},
    {id: 5, text: 'Thank you'}
]

const dialogsElements = dialogs
    .map(d => <DialogItem id={d.id} name={d.name} />)


const messagesElements = messages
    .map(m => <Message text={m.text}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>   
        </div>
    )
}

export default Dialogs;