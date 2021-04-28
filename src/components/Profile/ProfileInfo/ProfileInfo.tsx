import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileType} from "../../../Types/Types";


type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profileData: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
}

const ProfileInfo:FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (profileData: ProfileType) => {
        //TODO: remove then
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