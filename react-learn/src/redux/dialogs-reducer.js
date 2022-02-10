const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

let initalState = {
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
}

export const dialogsReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state
        case CHANGE_MESSAGE:
            state.newMessageText = state.dialogMessage;
            return state;
        default:
            return state
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => (
    {
        type: ADD_MESSAGE
    }
);

export const changeMessageActionCreator = (text) => (
    {
        type: CHANGE_MESSAGE,
        dialogMessage: text
    }
);
