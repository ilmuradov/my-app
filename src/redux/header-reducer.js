import {usersAPI} from "../API/usersAPI";

const SET_HEADER_INFO = 'SET_HEADER_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_AUTH_DATA = 'SET_AUTH_DATA';

const stateInitial = {
    info: null,
    isFetching: false,
    login: null,
    email: null,
    userId: null,
    isAuth: false
}

const headerReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_HEADER_INFO:
            return {
                ...state,
                info: action.info
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
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

export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setHeaderInfo = (info) => ({type: SET_HEADER_INFO, info});
export let setAuthData = ({login, email, userId}) => ({type: SET_AUTH_DATA, data: {login, email, userId}});

export const authMeThunkCreator = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.authMe()
        .then(response => {
            let {email, id, login} = response.data;
            if (response.resultCode === 0) {
                dispatch(setAuthData({login, email, userId: id}))
            }
            usersAPI.getProfilePhoto(id)
                .then(response => {
                    dispatch(setHeaderInfo(response.small))
                    dispatch(toggleIsFetching(false))
                })
        })

}

export default headerReducer;