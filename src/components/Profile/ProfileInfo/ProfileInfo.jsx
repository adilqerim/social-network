import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ProfileDataReduxForm} from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";


const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (data) => {
        props.saveProfile(data).then(
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
            ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
            : <ProfileData profile={props.profile}
                           isOwner={props.isOwner}
                           goToEditMode={() => setEditMode(true)}/>}

        <div>
            <ProfileStatusWithHooks status={props.status}
                                    updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;