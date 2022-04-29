import React from "react";
import classes from "./Home-posts.module.css";

const Home_posts = (props) => {
    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.photo_container}>
                        <div className={classes.photo_element}>
                            {props.photo ? <img className={classes.img} src={props.photo}/> : null}
                        </div>
                    </div>

                    <div className={classes.subContainer}>
                        <div className={classes.username}>
                            <h3> {props.name} </h3>
                        </div>
                        <div className={classes.status}>
                            <p> {props.status} </p>
                        </div>
                    </div>
                </div>
                :
                <div className={classes.container__day}>
                    <div className={classes.photo_container__day}>
                        <div className={classes.photo_element__day}>
                            {props.photo ? <img className={classes.img__day} src={props.photo}/> : null}
                        </div>
                    </div>

                    <div className={classes.subContainer__day}>
                        <div className={classes.username__day}>
                            <h3> {props.name} </h3>
                        </div>
                        <div className={classes.status__day}>
                            <p> {props.status} </p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Home_posts;