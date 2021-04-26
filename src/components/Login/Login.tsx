import React, {FC} from 'react'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import {AppStateType} from "../../redux/reduxStore";


type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        let {email, password, rememberMe, captcha} = formData
        props.login(email, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    })

export default connect(mapStateToProps, {login})(Login)