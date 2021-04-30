import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import {AppStateType} from "../../redux/reduxStore";


export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const Login: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector( (state: AppStateType) => state.auth.captchaUrl)

    const dispatch = useDispatch()

    const onLogin = (formData: LoginFormValuesType) => {
        let {email, password, rememberMe, captcha} = formData
        dispatch(login(email, password, rememberMe, captcha))
    }

    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onLogin} captchaUrl={captchaUrl}/>
    </div>
}

