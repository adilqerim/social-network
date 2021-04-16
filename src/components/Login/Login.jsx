import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";


const Login = (props) => {

    const onSubmit = (formData) => {
        let {login, password, rememberMe} = formData
        props.login(login, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

export default connect(mapStateToProps, {login})(Login)