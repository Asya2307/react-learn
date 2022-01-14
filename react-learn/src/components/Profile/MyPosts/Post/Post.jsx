import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png" />
            <div className={s.item__text}>Post</div>
            <div>
                <span>
                    Like
                </span>
            </div>
        </div>
    )
};

export default Post;