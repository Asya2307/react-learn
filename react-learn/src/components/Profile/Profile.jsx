import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <div>
                <MyPostsContainer store={props.store} />
            </div>

        </div>
    )
};

export default Profile;