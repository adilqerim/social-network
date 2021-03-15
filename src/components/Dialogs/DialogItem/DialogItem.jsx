import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialogItem}>
            <img src='https://images.unsplash.com/photo-1562860149-691401a306f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'/>
            <NavLink to={ path } activeClassName={s.activeLink}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;