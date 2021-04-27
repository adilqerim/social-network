import React, {FC} from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "../ProfileInfo.module.css";
import styles from "../../../common/FormsControls/FormsControls.module.css";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {ProfileType} from "../../../../Types/Types";
import {LoginFormValuesType} from "../../../Login/Login";

const maxLength15 = maxLengthCreator(15)

type ProfileDataFormOwnPropsType = { profile: ProfileType }

const ProfileDataForm: FC<InjectedFormProps<LoginFormValuesType, ProfileDataFormOwnPropsType> & ProfileDataFormOwnPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {<button>Save</button>}
        {props.error && <div className={styles.formSummaryError}> {props.error} </div>}
        {createField('Name', 'fullName', [required, maxLength15], Input)}
        {createField(undefined, 'lookingForAJob', [], Input, {type: 'checkbox'}, 'Looking for a job')}
        {createField('Enter your professional skills', 'lookingForAJobDescription', [], Textarea, {}, 'Professional skills')}
        {createField('Tell us about you', 'aboutMe', [], Textarea, {}, 'About me')}
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div className={s.contact}> <b>{key}</b>
                {createField(`Enter ${key}`, `contacts.${key}`, [], Input)}
            </div>})}
        </div>
    </form>
}

export default reduxForm<LoginFormValuesType, ProfileDataFormOwnPropsType>({form: 'profileDataForm'})(ProfileDataForm)