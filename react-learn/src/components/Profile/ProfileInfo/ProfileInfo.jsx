import React from "react";
import s from './Profile.module.css'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img width='100%' height='500px' src='https://wallpapershome.ru/images/pages/pic_h/23480.jpg' />
            </div>
            <div className={s.description__block}>
                ava + description
                <img src={props.profile.photos.large} />
                <span>{props.profile.fullName}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;