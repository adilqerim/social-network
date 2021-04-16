import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>LOG OUT</button></div>
                : <NavLink to={'/login'}><button>LOGIN</button></NavLink> }
        </div>
    </header>
}


export default Header;