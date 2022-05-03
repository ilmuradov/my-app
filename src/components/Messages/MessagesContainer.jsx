import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import { sendMessage, typeMessage, } from '../../redux/dialog-reducer';


class MessagesContainer extends React.Component{
    render() {
        return <Messages {...this.props} />
    }

}

const mapStateToProps = (state) => ({
    night: state.settings.night,

    // Chats
    itemsChats: state.messagesPage.chats,

    // Chat
    itemsChat: state.messagesPage.chat,
    value: state.messagesPage.newMessage
})

export default connect(mapStateToProps, {sendMessage, typeMessage})(MessagesContainer);