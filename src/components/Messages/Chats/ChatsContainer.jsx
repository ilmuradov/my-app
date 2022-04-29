import Chats from './Chats';
import {connect} from "react-redux";

// const ChatsContainer = (props) => {
//     const items = props.store.getState().messagesPage.chats;
//
//     return <Chats items={items} />
// }

const mapStateToProps = (state) => ({
    items: state.messagesPage.chats,
    night: state.settings.night
})

const ChatsContainer = connect(mapStateToProps)(Chats);

export default ChatsContainer;