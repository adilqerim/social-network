import React from 'react'
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import Element from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from './../common/FormsControls/FormsControls.module.css'

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

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field component={Input} name={'captcha'}
                                        validate={[required]}/>}

            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'login'})(LoginForm)

