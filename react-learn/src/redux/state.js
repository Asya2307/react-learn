const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_POST = 'CHANGE-TEXT-POST';

let store = {
    _state : {
        profilePage: {
            posts : [
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
        },
        dialogsPage: {
            dialogsData : [
                {
                    id: 1,
                    name: 'Анастасия'
                },
                {
                    id: 2,
                    name: 'Валера'
                },
                {
                    id: 3,
                    name: 'Владимир'
                }
            ],
            messagesData : [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How are you?'
                },
                {
                    id: 3,
                    message: 'What are you doing'
                }
            ]
        },
        sidebar: [
            {
                id: 1,
                avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                name: 'Саша'
            },
            {
                id: 1,
                avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                name: 'Ваня'
            },
            {
                id: 1,
                avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                name: 'Маша'
            },
        ],
    },
    _callSubscriber() {
        console.log('rerender complete')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 100
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    changeTextPost(postMessage) {
        this._state.profilePage.newPostText = postMessage;
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        console.log(action)
        if(action.type === ADD_POST) {
            this.addPost()

        } else if (action.type === CHANGE_TEXT_POST) {
            this.changeTextPost(action.postMessage)
        }
    },
}

export const addPostActionCreator = () => (
    {type: ADD_POST}
)

export const onPostChangeActionCreator = (text) => (
    {
        type: CHANGE_TEXT_POST,
        postMessage: text
    }
)


export default store