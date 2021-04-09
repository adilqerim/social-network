import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




