import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changeTextPost(text)
    }



    return (
        <div className={s.posts__block}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;