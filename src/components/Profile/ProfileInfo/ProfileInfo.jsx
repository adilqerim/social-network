import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.unsplash.com/photo-1578608738964-cd27acd5af2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p> {props.profile.fullName}</p>
                <p> {props.profile.aboutMe}</p>
                <p> {props.profile.contacts.vk}</p>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;