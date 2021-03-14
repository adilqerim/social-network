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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Alla' id='3'/>
                <DialogItem name='Danya' id='4'/>
                <DialogItem name='Valya' id='5'/>
            </div>
            <div className={s.messages}>
                <Message text='Hello'/>
                <Message text='How you'/>
                <Message text='Doing?'/>
            </div>   
        </div>
    )
}


export default Dialogs;