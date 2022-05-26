const SEND_MESSAGE = 'ADD-MESSAGE';
const TYPE_MESSAGE = 'SEND-MESSAGE';

const stateInitial = {
    chats: [
        {id: 1, name: 'Sohbet'},
        {id: 2, name: 'Rovshen'},
        {id: 3, name: 'Durdy'},
        {id: 4, name: 'Nury'},
        {id: 6, name: 'Rahym'},
        {id: 5, name: 'Atajan'},
        {id: 7, name: 'Didar'},
        {id: 8, name: 'Didar'}
    ],
    chat: [
        {message: 'Hi!'},
        {message: 'Oh how are you?'},
        {message: 'Where are you from?'}
    ],
    newMessage: ''
}

const dialogReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const text = action.message;
            return {
                ...state,
                chat: [
                    ...state.chat, 
                    {message: text}
                ]
            }
        default: 
            return state;
    }
}

export let sendMessage = (message) => ({ type: SEND_MESSAGE,  message});
export default dialogReducer;