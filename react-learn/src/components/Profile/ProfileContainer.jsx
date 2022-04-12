import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component  {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
                }
            );
    }

    render () {
        return (
            <div className={s.content}>
                {console.log(this.props)}
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);