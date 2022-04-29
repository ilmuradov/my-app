import React from "react";
import preloader from './../../../assets/images/Spinner.svg'
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.container}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader