import React from "react";
import s from "../ProfileInfo.module.css";

export const ProfileData = (props) => {
    return (<div>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            <div>
                <b> Name </b>: {props.profile.fullName}
            </div>

            <div>
                <b> Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : 'No'}
            </div>

            <div>
                <b>Professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>

            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>


            <div>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                if (props.profile.contacts[key]) {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                }

            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b> {contactTitle}: </b> {contactValue}
    </div>
}