const SET_HEADER_INFO = 'SET_HEADER_INFO';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const stateInitial = {
    info: null,
    isFetching: false
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
        default:
            return state;
    }
}

export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let setHeaderInfo = (info) => ({ type: SET_HEADER_INFO, info });

export default headerReducer;