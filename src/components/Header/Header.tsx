import React, {FC} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from "redux";

type MapStatePropsType = {
    userName: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Header: FC<PropsType> = ({ userName,  isAuth, logout}) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png' />

        <div className={s.loginBlock}>
            {isAuth
                //Имя пользователя и кнопка выхода
                ? <div>{userName} <button onClick={logout}>LOG OUT</button></div>
                : <NavLink to={'/login'}><button>LOGIN</button></NavLink> }
        </div>
    </header>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    userName: state.auth.login,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps,
    { logout }),
    )(Header);
