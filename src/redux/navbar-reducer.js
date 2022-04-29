const TOGGLE_HOME = 'TOGGLE_HOME';
const TOGGLE_MESSAGES = 'TOGGLE_MESSAGES';
const TOGGLE_ADD_NEW = 'TOGGLE_ADD_NEW';
const TOGGLE_EXPLORE = 'TOGGLE_EXPLORE';
const TOGGLE_LIKES = 'TOGGLE_LIKES';
const TOGGLE_PROFILE = 'TOGGLE_PROFILE';

const stateInitial = {
    home: false,
    messages: false,
    addNew: false,
    explore: false,
    likes: false,
    profile: false
}

const navbarReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case TOGGLE_HOME:
            return {
                ...state,
                home: action.isItemActive,
                messages: false,
                addNew: false,
                explore: false,
                likes: false,
                profile: false
            }
        case TOGGLE_MESSAGES:
            return {
                ...state,
                home: false,
                messages: action.isItemActive,
                addNew: false,
                explore: false,
                likes: false,
                profile: false
            }
        case TOGGLE_ADD_NEW:
            return {
                ...state,
                home: false,
                messages: false,
                addNew: action.isItemActive,
                explore: false,
                likes: false,
                profile: false
            }
        case TOGGLE_EXPLORE:
            return {
                ...state,
                home: false,
                messages: false,
                addNew: false,
                explore: action.isItemActive,
                likes: false,
                profile: false
            }
        case TOGGLE_LIKES:
            return {
                ...state,
                home: false,
                messages: false,
                addNew: false,
                explore: false,
                likes: action.isItemActive,
                profile: false
            }
        case TOGGLE_PROFILE:
            return {
                ...state,
                home: false,
                messages: false,
                addNew: false,
                explore: false,
                likes: false,
                profile: action.isItemActive
            }
        default:
            return state;
    }
}

export let toggleHome = (isItemActive) => ({ type: TOGGLE_HOME, isItemActive });
export let toggleMessages = (isItemActive) => ({ type: TOGGLE_MESSAGES, isItemActive });
export let toggleAddNew = (isItemActive) => ({ type: TOGGLE_ADD_NEW, isItemActive });
export let toggleExplore = (isItemActive) => ({ type: TOGGLE_EXPLORE, isItemActive });
export let toggleLikes = (isItemActive) => ({ type: TOGGLE_LIKES, isItemActive });
export let toggleProfile = (isItemActive) => ({ type: TOGGLE_PROFILE, isItemActive });

export default navbarReducer;