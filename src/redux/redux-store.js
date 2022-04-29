import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from "./dialog-reducer";
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import headerReducer from "./header-reducer";
import navbarReducer from "./navbar-reducer";
import homeReducer from "./home-reducer";
import settingsReducer from "./settings-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    homePage: homeReducer,
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    header: headerReducer,
    navbar: navbarReducer,
    settings: settingsReducer
})
 
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;