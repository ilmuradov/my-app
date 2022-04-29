const SET_POSTS = 'SET_POSTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const stateInitial = {
    posts: [],
    totalCount: 0,
    itemsOnPage: 100,
    currentPage: 1,
    isFetching: false
}

const homeReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: [...state.posts, action.post] }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        default:
            return state;
    }
}

export let setPosts = (post) => ({ type: SET_POSTS, post });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default homeReducer;