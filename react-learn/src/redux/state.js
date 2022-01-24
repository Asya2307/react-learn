export let rerenderEntireTree = () => {
    console.log('rerender complete')
}


let state = {

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
}

window.state = state

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 100
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    console.log(state.profilePage.newPostText)
    rerenderEntireTree(state)
};

export let changeTextPost = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    rerenderEntireTree(state)
};


export default state