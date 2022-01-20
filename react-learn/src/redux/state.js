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
    ]

}

export default state