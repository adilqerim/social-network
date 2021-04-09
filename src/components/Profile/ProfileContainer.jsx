import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,
    {
        setUserProfile,
        getProfile
    })(withRouter(ProfileContainer))