import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    console.log(props)
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />)


    return (
        <div className={s.posts__block}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;