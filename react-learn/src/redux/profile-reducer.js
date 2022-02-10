const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, How are you?',
            likesCount: 12
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 11
        },
    ],
    newPostText: 'default'
}


const profileReducer = (state = initialState, action) => {
    console.log(state,action)
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 100
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case CHANGE_TEXT_POST:
            state.newPostText = action.postMessage;
            return state
        default:
            return state
    }

}


export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export const onPostChangeActionCreator = (text) => (
    {
        type: CHANGE_TEXT_POST,
        postMessage: text
    }
);

export default profileReducer;
