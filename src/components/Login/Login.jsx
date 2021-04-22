import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";


const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe, captcha} = formData
        props.login(login, password, rememberMe, captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}


const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    })

export default connect(mapStateToProps, {login})(Login)