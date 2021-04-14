import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}><button>LOGIN</button></NavLink> }
            <button onClick={props.logout}>logout</button>
        </div>
    </header>
}


export default Header;