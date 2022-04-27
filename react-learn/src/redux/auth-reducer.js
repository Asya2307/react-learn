const SET_USER_DATA = 'SET_USER_DATA';

let initalState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
//Редьюсер это чистая функция, которая принимает старый стейт, экшн и возвращает новый стейт
export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state
    }
}

export default authReducer;

export const setAuthUserData = (userId, email,login) => ({type: SET_USER_DATA, data: {userId, email, login}});


