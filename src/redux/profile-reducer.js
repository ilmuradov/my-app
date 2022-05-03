import { usersAPI } from "../API/usersAPI";

const SEND_POST = 'ADD-POST';
const TYPE_TEXT = 'CHANGE-AREA-TEXT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const stateInitial = {
    profile: null,
    newPostText: "",
    isFetching: false
}

const profileReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SEND_POST: 
            const message = state.newPostText;
            return {
                ...state,
                myPosts: [...state.myPosts, {
                    name: "Rovshen",
                    message: message,
                    likes: 2
                }],
                newPostText: ''
                }
        case TYPE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_PROFILE: {
            // debugger
            // debugger
            return {
                ...state,
                profile: action.profile
            }
        }
        default: 
            return state;
    }
}

export let newPostCreator = () => ({ type: SEND_POST });
export let typeNewPostCreator = (text) => ({ type: TYPE_TEXT, text: text });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const profilePageThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
        usersAPI.getAuthUser(userId)
        .then(response => {
            dispatch(setUserProfile(response))
            dispatch(toggleIsFetching(true))
        })
}

export default profileReducer;