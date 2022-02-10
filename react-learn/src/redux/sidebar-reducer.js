let initalState = {
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

const sidebarReducer = (state = initalState, action) => {
    return state
}

export default sidebarReducer