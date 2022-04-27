import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component  {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render () {
        console.log(this.props.isAuth)
        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth} />
            </div>
        )
    }
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))

