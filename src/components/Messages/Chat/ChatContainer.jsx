import Chat from "./Chat";
import { addNewMessageAC, sendNewMessageAC, } from '../../../redux/dialog-reducer';
import { connect } from "react-redux";


// const ChatContainer = (props) => {
//     const items = props.store.getState().messagesPage.chat;
//
//     const addNewMessage = () => {
//         if (value !== '') {
//             props.store.dispatch(addNewMessageCreator());
//         }
//     }
//
//     const sendNewMessage = (e) => {
//         const action = sendNewCreator(e);
//         props.store.dispatch(action);
//     }
//
//     return <Chat items={items} addNewMessageCreator={addNewMessage} sendNewCreator={sendNewMessage} value={value} />
// }


const mapStateToProps = (state) => {
    return {
        items: state.messagesPage.chat,
        value: state.messagesPage.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageCreator: () => {
            dispatch(addNewMessageAC());
        },
        sendNewCreator: (e) => {
            const action = sendNewMessageAC(e);
            dispatch(action)

        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;