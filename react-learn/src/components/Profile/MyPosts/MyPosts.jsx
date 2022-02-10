import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }

    return (
        <div className={s.posts__block}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;