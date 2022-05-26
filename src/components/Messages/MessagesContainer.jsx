import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import { sendMessage } from '../../redux/dialog-reducer';
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
    itemsChat: state.messagesPage.chat
})

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (value) => {
        dispatch(sendMessage(value))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withNavigate
)(MessagesContainer);