import {usersAPI} from "../API/usersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_FETCHING = 'TOGGLE_IS_FOLLOWING_FETCHING';

const stateInitial = {
    users: [],
    totalCount: 0,
    itemsOnPage: 100,
    currentPage: 1,
    isFetching: false,
    isFollowingFetching: []
}

const usersReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USER:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_FETCHING:
            debugger
            return  {...state, isFollowingFetching: [...state.isFollowingFetching.filter()]}
        default:
            return state;
    }
}

export let follow = (userId) => ({ type: FOLLOW, id: userId });
export let unfollow = (userId) => ({ type:UNFOLLOW, id: userId });
export let setUsers = (users) => ({ type:SET_USER, users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleIsFollowingFetching = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_FETCHING, isFetching });

export const getUsers = (currentPage, itemsOnPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, itemsOnPage)
        .then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
        });
}

export const onSpanChanged = (m, itemsOnPage) => (dispatch) => {
    dispatch(setCurrentPage(m))
    dispatch(toggleIsFetching(true))
    usersAPI.onSpanChanged(m, itemsOnPage)
        .then(response => {
            dispatch(setUsers(response.items))
            dispatch(toggleIsFetching(false))
        })
}

export const followTC = (userId) => (dispatch) => {
    usersAPI.follow(userId)
        .then(response => {
            if(response.resultCode === 0) {
                dispatch(follow(userId))
            }
        })
}

export const unfollowTC = (userId) => (dispatch) => {
    usersAPI.unfollow(userId)
        .then(response => {
            if(response.resultCode === 0) {
                dispatch(unfollow(userId))
            }
        })
}
export default usersReducer;