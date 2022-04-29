import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";

class MessagesContainer extends React.Component{
    render() {
        return <Messages night={this.props.night} />
    }

}

const mapStateToProps = (state) => ({
    night: state.settings.night
})

export default connect(mapStateToProps, {})(MessagesContainer);