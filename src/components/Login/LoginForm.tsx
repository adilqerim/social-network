import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {login} from "../../redux/authReducer";
import Element from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from './../common/FormsControls/FormsControls.module.css'
import {LoginFormValuesType} from "./Login";

const Input = Element("input");

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder={'Login'} name={'email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} placeholder={'Password'} name={'password'} type={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/> Remember me
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

export default reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)

