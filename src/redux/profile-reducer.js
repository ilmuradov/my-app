import { profileAPI } from "../API/profileAPI";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const stateInitial = {
    profile: null,
    status: null,
    isFetching: false
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }
}

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setStatus = (status) => ({ type: SET_STATUS, status })
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
                dispatch(toggleIsFetching(true))
            })
}

export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setStatus(res))
            })
}

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
        dispatch(setStatus(status))
}

export default profileReducer;