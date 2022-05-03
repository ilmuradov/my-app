import React from "react";
import Message from './Message/Message';
import classes from './Chat.module.css';
import SendMessage from "./SendMessage/SendMessage";
import info from '../../../assets/images/info.png'


const Chat = (props) => {
    const messagesElements = props.items.map(m => <Message night={props.night} message={m.message} key={m.id} />)


    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.name_container}>
                        <div className={classes.name_subcontainer}>
                            <h2 className={classes.name}> Sohbet </h2>
                            <img alt='' className={classes.infoImg} src={info}/>
                        </div>
                    </div>

                    <div className={classes.messages}>
                        {messagesElements}
                    </div>

                    <SendMessage sendMessage={props.sendMessage}
                                 typeMessage = {props.typeMessage}
                                 value={props.value}
                                 night={props.night} />
                </div>
                :
                <div className={classes.container__day}>
                    <div className={classes.name_container__day}>
                        <div className={classes.name_subContainer__day}>
                            <h2 className={classes.name__day}> Sohbet </h2>
                            <img alt='' className={classes.infoImg} src={info}/>
                        </div>
                    </div>

                    <div className={classes.messages__day}>
                        {messagesElements}
                    </div>

                    <SendMessage sendMessage={props.sendMessage}
                                 typeMessage = {props.typeMessage}
                                 value={props.value}
                                 night={props.night} />
                </div>
            }
        </>
    )
}

export default Chat;