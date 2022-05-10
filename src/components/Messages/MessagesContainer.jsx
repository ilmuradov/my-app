import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import { sendMessage, typeMessage, } from '../../redux/dialog-reducer';
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withNavigate} from "../../hoc/withNavigate";


class MessagesContainer extends React.Component{
    render() {
        if(!this.props.isAuth) return <Navigate to='/login' />
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


export default compose(
    connect(mapStateToProps, {sendMessage, typeMessage}),
    withNavigate
)(MessagesContainer);