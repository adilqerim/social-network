import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (profileData) => {
        props.saveProfile(profileData).then(
            () => {
                setEditMode(false)
            })
    }

    return <div className={s.descriptionBlock}>

        <div>
            <img className={s.userAvatar}
                 src={props.profile.photos.large || userPhoto}/>

            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        </div>

        {editMode
            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
            : <ProfileData profile={props.profile}
                           isOwner={props.isOwner}
                           goToEditMode={() => setEditMode(true)}/>}
        <div>
            <ProfileStatus status={props.status}
                                    updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;