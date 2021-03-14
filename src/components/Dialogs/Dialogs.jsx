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

const dialogsData = [
    {id: 1, name: 'Mops'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valya'},
    {id: 4, name: 'Alla'},
    {id: 5, name: 'Dima'}
]

const messagesData = [
    {id: 1, text: 'Hello)'},
    {id: 2, text: 'Long to no see!'},
    {id: 3, text: 'How you doing?'},
    {id: 4, text: 'Hey, I am great'},
    {id: 5, text: 'Thank you'}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
            </div>   
        </div>
    )
}

export default Dialogs;