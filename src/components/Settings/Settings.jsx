import React from "react";
import classes from './Settings.module.css';

const Settings = (props) => {
    const toggle = () => {
        if (props.night) {
            props.toggle(false)
        } else props.toggle(true)
    }

    return (
        <div className={props.night ? classes.container__night : classes.container__day}>
            {props.night ?
                <>
                    <div className={classes.h_container__night}> <h1> Settings </h1> </div>
                    <div className={classes.subContainer}>
                        <div className={classes.dayNight__night}>
                            <p> Night theme </p>
                            <button onClick={toggle} className={classes.toggleBtn__true}>
                                <div className={classes.true}></div>
                            </button>
                        </div>
                    </div>
                </>

                :

                <>
                    <div className={classes.h_container__day}> <h1> Settings </h1> </div>
                    <div className={classes.subContainer}>
                        <div className={classes.dayNight__day}>
                            <p> Night theme </p>
                            <div onClick={toggle} className={classes.toggleBtn__false}>
                                <div className={classes.false}></div>
                            </div>
                        </div>
                    </div>
                </>

            }
        </div>
    )
}

export default Settings;