import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const withUrlData = withRouter(AuthRedirectComponent)

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps,
    {
        setUserProfile,
        getProfile
    })(withUrlData)

