import React, {FC, useEffect} from 'react';
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../Types/Types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}

type PathParamsType = {
    userId: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

const Profile: FC<PropsType> = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push('/login')
            }
        }
        props.getProfile(userId)
        props.getStatus(userId)
    }, [])

    return <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={!props.match.params.userId}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
        <MyPosts/>
    </div>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    })
}

export default compose(
    connect(mapStateToProps,
        {
            getProfile,
            getStatus,
            updateStatus,
            savePhoto,
            saveProfile
        }),
    withRouter,
    withAuthRedirect
)(Profile)






