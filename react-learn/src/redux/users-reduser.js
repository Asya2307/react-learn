const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            fullName: 'Anastasia',
            followed: false,
            status: 'Boss',
            location: {
                city: 'Chelyabinsk',
                country: 'Russia'
            }
        },
        {
            id: 2,
            fullName: 'Vladimir',
            followed: true,
            status: 'Happy in this year',
            location: {
                city: 'Minsk',
                country: 'Ukraine'
            }
        },
        {
            id: 3,
            fullName: 'Alya',
            followed: false,
            status: 'Mother of two pretty boys',
            location: {
                city: 'Boston',
                country: 'USA'
            }
        },
        {
            id: 4,
            followed: false,
            fullName: 'Misha',
            status: 'Hard work',
            location: {
                city: 'Chelyabinsk',
                country: 'Russia'
            }
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (
                    u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                    }
                )
            }
        }

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}


export const followAC = (userId) => (
    {
        type: FOLLOW,
        userId
    }
)

export const unfollowAC = (userId) => (
    {
        type: UNFOLLOW,
        userId
    }
);

export const setUsersAC = (users) => (
    {
        type: SET_USERS,
        users
    }
)

export default usersReducer;
