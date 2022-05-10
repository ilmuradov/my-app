import { usersAPI } from "../API/usersAPI";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_ID = 'SET_USER_ID';

const stateInitial = {
    profile: null,
    newPostText: "",
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
        case SET_USER_ID: {
            return {
                ...state,
                id: action.id
            }
        }
        default: 
            return state;
    }
}

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setId = (id) => ({ type: SET_USER_ID, id });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const profilePageThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
        usersAPI.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response))
            dispatch(toggleIsFetching(true))
        })
}

export default profileReducer;