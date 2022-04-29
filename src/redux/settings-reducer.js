const TOGGLE_DAY_NIGHT = 'TOGGLE_DAY_NIGHT';

const stateInitial = {
    night: true
}

const settingsReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case TOGGLE_DAY_NIGHT:
            return {
                ...state, night: action.boolean
            }
        default:
            return state;
    }
}

export let toggleDayNight = (boolean) => ({ type: TOGGLE_DAY_NIGHT, boolean });

export default settingsReducer;