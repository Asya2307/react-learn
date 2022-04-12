const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: 'default',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 3,
                        message: state.newPostText,
                        likesCount: 100
                    }
                ],
                newPostText: ''
            };
        }
        case CHANGE_TEXT_POST: {
            return {
                ...state,
                newPostText: action.postMessage
            };
        }
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }
        }
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

export const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile
    }
);

export default profileReducer;
