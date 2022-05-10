import {usersAPI} from "../API/usersAPI";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

const stateInitial = {
    login: null,
    email: null,
    userId: null,
    isAuth: false
}

const authReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export let setAuthData = ({login, email, userId}) => ({ type: SET_AUTH_DATA, data: {login, email, userId} });

export const getAuthDataThunkCreator = () => (dispatch) => {
    usersAPI.authMe()
        .then(response => {
            let {email, id, login} = response.data;
            if(response.resultCode === 0) {
                dispatch(setAuthData({login, email, userId: id}))
            }
        })
}


export default authReducer;