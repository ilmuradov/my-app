import React from 'react'
import classes from './SendMessage.module.css'

const SendMessage = (props) => {
    const sendMessage = () => {
        props.sendMessage();
    }

    const typeMessage = (e) => {
        e = e.target.value;
        props.typeMessage(e);
    }

    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.subcontainer}>
                        <input onChange={typeMessage} type="text" value={props.value} placeholder='Message...' className={classes.input} />
                        <button className={classes.button} onClick={sendMessage}> Send </button>
                    </div>
                </div>
                :
                <div className={classes.container__day}>
                    <div className={classes.subcontainer__day}>
                        <input onChange={typeMessage} type="text" value={props.value} placeholder='Message...' className={classes.input__day} />
                        <button className={classes.button__day} onClick={sendMessage}> Send </button>
                    </div>
                </div>

            }
        </>
    )
}

export default SendMessage;