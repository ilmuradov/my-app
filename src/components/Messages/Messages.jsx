import React from "react";
import Chats from "./Chats/Chats";
import Chat from "./Chat/Chat";
import classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <Chats  night={props.night} items={props.itemsChats} />
                    <Chat   night={props.night} items={props.itemsChat} value={props.value}
                            sendMessage={props.sendMessage} typeMessage={props.typeMessage} />
                </div>
                :
                <div className={classes.container__day}>
                    <Chats  night={props.night} items={props.itemsChats} />
                    <Chat   night={props.night} items={props.itemsChat} value={props.value}
                            sendMessage={props.sendMessage} typeMessage={props.typeMessage} />
                </div>
            }
        </>
    )
}

export default Messages;