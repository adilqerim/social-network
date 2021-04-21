import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {

    useEffect( () => {
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

    return (
        <Profile profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
                 isOwner={!props.match.params.userId}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
        />
    )
}



const mapStateToProps = state => {
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
)(ProfileContainer)






