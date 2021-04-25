import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import Element from "../../../common/FormsControls/FormsControls";
import s from "../ProfileInfo.module.css";
import styles from "../../../common/FormsControls/FormsControls.module.css";

const Input = Element("input");
const Textarea = Element("textarea");
const maxLength15 = maxLengthCreator(15)
const maxLength30 = maxLengthCreator(30)

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        {<button>Save</button>}

        {props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}

        <div>
            <b>Name</b>: <Field component={Input}
                                name='fullName'
                                validate={[required, maxLength15]}/>
        </div>

        <div>
            <b>Looking for a job</b>: <Field component={Input}
                                             name='lookingForAJob'
                                             type='checkbox'/>
        </div>

        <div>
            <b>Professional skills</b>: <Field component={Textarea}
                                               name='lookingForAJobDescription'
                                               validate={[required, maxLength30]}/>
        </div>

        <div>
            <b>About me</b>: <Field component={Textarea}
                                    name='aboutMe'
                                    validate={[required, maxLength30]}/>
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {

            return <div className={s.contact}>

                <b>{key}</b> <Field key={key}
                                    component={Input}
                                    placeholder={key}
                                    name={`contacts.${key}`}/>
            </div>
        })}
        </div>
    </form>
}

export default reduxForm(
    {
        form: 'profileDataForm'
    }
)(ProfileDataForm)

