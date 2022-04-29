import React from 'react'
import classes from './SendMessage.module.css'

const SendMessage = (props) => {
    const addNewMessage = () => {
        props.addNewMessageCreator();
    }

    const sendNewMessage = (e) => {
        e = e.target.value;
        props.sendNewCreator(e);
    }

    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.subcontainer}>
                        <input onChange={sendNewMessage} type="text" value={props.value} placeholder='Message...' className={classes.input} />
                        <button className={classes.button} onClick={addNewMessage}> Send </button>
                    </div>
                </div>
                :
                <div className={classes.container__day}>
                    <div className={classes.subcontainer__day}>
                        <input onChange={sendNewMessage} type="text" value={props.value} placeholder='Message...' className={classes.input__day} />
                        <button className={classes.button__day} onClick={addNewMessage}> Send </button>
                    </div>
                </div>

            }
        </>
    )
}

export default SendMessage;