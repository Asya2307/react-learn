import React from "react";
import s from './Profile.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width='100%' height='500px' src='https://wallpapershome.ru/images/pages/pic_h/23480.jpg' />
            </div>
            <div className={s.description__block}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;