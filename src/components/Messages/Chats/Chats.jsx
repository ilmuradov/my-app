import Dialogs from './Dialogs/Dialogs';
import classes from './Chats.module.css';

const Chats = (props) => {
    const dialogsElements = props.items.map(d => <Dialogs name={d.name} id={d.id} />)

    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.header}> <h2> Chats </h2> </div>
                    <div className={classes.dialogs}>
                        {dialogsElements}
                    </div>
                </div>
                :
                <div className={classes.container__day}>
                    <div className={classes.header__day}> <h2> Chats </h2> </div>
                    <div className={classes.dialogs__day}>
                        {dialogsElements}
                    </div>
                </div>
            }
        </>

    )
}

export default Chats;