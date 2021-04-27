import React, {FC, MouseEventHandler} from "react";
import s from "../ProfileInfo.module.css";
import {ProfileType} from "../../../../Types/Types";

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: MouseEventHandler<HTMLButtonElement>
}

export const ProfileData: FC<ProfileDataType> = ({ profile, isOwner, goToEditMode }) => {
    return (<div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <b> Name </b>: {profile.fullName}
            </div>
            <div>
                <b> Looking for a job</b>: {profile.lookingForAJob ? "Yes" : 'No'}
            </div>
            <div>
                <b>Professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                if (profile.contacts[key]) {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
            })}
            </div>
        </div>
    )
}

type ContactType = {
    contactTitle: any
    contactValue: any
}

const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b> {contactTitle}: </b> {contactValue}
    </div>
}