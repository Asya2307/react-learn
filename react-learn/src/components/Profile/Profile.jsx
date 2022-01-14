import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img width='100%' height='500px' src='https://wallpapershome.ru/images/pages/pic_h/23480.jpg' />
            </div>
            <div>
                <MyPosts />
            </div>

        </div>
    )
};

export default Profile;