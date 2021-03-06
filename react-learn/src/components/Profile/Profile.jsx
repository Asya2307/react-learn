import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} isAuth={props.isAuth} />
            <div>
                <MyPostsContainer />
            </div>

        </div>
    )
};

export default Profile;