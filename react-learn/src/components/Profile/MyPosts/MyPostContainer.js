import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(
            addPostActionCreator()
        );
    };

    const onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
       <MyPosts
           addPost={addPost}
           onPostChange={onPostChange}
           posts={state.profilePage.posts}
           newPostText={state.profilePage.newPostText}
       />
    )
};

export default MyPostsContainer;