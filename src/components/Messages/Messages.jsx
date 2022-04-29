import React from "react";
import ChatsContainer from "./Chats/ChatsContainer";
import ChatContainer from "./Chat/ChatContainer";
import classes from './Messages.module.css';

const Messages = (props) => {
    console.log(props.night)
    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <ChatsContainer night={props.night} />
                    <ChatContainer night={props.night} />
                </div>
                :
                <div className={classes.container__day}>
                    <ChatsContainer night={props.night} />
                    <ChatContainer night={props.night} />
                </div>
            }
        </>
    )
}

export default Messages;