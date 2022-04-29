import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            profile: {
                name: "Dovran", 
                surname: "Ilmuradov", 
                birthday: "31.01.2002",
                friends: 43,
                followers: "783K"
            },
            myposts: [
                {name: "Sohbet", message: "Hi, how are you?", likes: 23},
                {name: "Dovran", message: "It's my first message", likes: 51},
                {name: "Didar", message: "Yes", likes: 0},
                {name: "Rovshen", message: "I'm here", likes: 40}
            ],
            myFriends: [
                {name: "Rovshen"},
                {name: "Didar"},
                {name: "Suray"},
                {name: "Kemal"}
            ],
            newPostText: ""
        },
    
        messagesPage: {
            chats: [
                {id: 1, name: 'Sohbet'},
                {id: 2, name: 'Rovshen'},
                {id: 3, name: 'Durdy'},
                {id: 4, name: 'Nury'},
                {id: 5, name: 'Atajan'},
                {id: 6, name: 'Rahym'},
                {id: 7, name: 'Didar'}
            ],
            chat: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Oh how are you?'},
                {id: 3, message: 'Where are you from?'}
            ],
            newMessage: ''
        }
    },
    
    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },
    
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

// window.store = store;
// export default store;