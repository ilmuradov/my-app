import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    const path = '/messages/' + props.id;
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    return (
        <div className={classes.item}>
            <NavLink to={path} className={classes.navLink}>
                <div className={classes.new}></div>
                <div className={classes.photo}></div>

                <div className={classes.container}>
                    <h4 className={classes.name}> {props.name} </h4>
                    <p className={classes.text}> {text} </p>
                </div>
            </NavLink>
        </div>
    )
}

export default Dialogs;