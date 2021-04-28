import React, {FC} from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from './../common/FormsControls/FormsControls.module.css'
import {LoginFormValuesType} from "./Login";



type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

export type LoginFormValuesKeysType = GetStringKeys<LoginFormValuesType>

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {createField<LoginFormValuesKeysType>('Enter login', 'email', [required], Input)}
            {createField<LoginFormValuesKeysType>('Enter password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormValuesKeysType>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createField<LoginFormValuesKeysType>(undefined, 'captcha', [required], Input)}
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <button>Login</button>
        </form>
    )
}

export default reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)

