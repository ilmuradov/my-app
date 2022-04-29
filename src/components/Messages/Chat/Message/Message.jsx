import classes from './Message.module.css'

const Message = (props) => {
    return (
        <>
            {props.night ?
                <div className={classes.item}>
                    <div className={classes.avatar}>
                        <div className={classes.img}></div>
                    </div>
                    <div className={classes.text}> {props.message} </div>
                </div>
                :
                <div className={classes.item__day}>
                    <div className={classes.avatar__day}>
                        <div className={classes.img}></div>
                    </div>
                    <div className={classes.text__day}> {props.message} </div>
                </div>
            }
        </>
    )
}

export default Message;