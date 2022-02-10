import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";


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
            ],
            newMessageText: 'Hello'
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
}

export default store