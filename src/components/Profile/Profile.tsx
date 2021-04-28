import React, {ComponentType, FC, useEffect} from 'react';
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType} from "../../Types/Types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profileData: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

const Profile: FC<PropsType> = (props) => {
    let userId: number | null = +props.match.params.userId
    useEffect(() => {
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                //todo: replace push with redirect
                props.history.push('/login')
            }
        }

        if (!userId) {
            console.error('ID should exists in URI params or in state "authorizedUserId"')
        } else {
            props.getProfile(userId)
            props.getStatus(userId)
        }

    }, [userId])

    return <div>
        <ProfileInfo profile={props.profile as ProfileType}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     isOwner={!props.match.params.userId}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}/>
        <MyPosts/>
    </div>
}


const mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    })
}

export default compose<ComponentType>(
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






