import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import Element from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const Input = Element("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder={'Login'} name={'login'}
                validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
   )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

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
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

export default connect(mapStateToProps, {login})(Login)