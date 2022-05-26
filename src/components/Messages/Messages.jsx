import React from "react";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
            <div className={props.night ? classes.container : classes.container__day}>
                <Chats  night={props.night} items={props.itemsChats} />
                <Chat   night={props.night} items={props.itemsChat} sendMessage={props.sendMessage} />
            </div>
    )
}

export default Messages;