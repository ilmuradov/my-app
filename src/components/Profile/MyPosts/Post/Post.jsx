import React from "react";
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.container}>

            <div className={classes.post__container}>
                <div className={classes.img__container}>
                    {/* <img className={classes.img} src={img} /> */}
                </div>                
                <div className={classes.message}>
                    <div className={classes.h__container}> <h3> {props.name} </h3> </div>
                    <p> {props.message} </p>
                </div>
                <p className={classes.likes}> {props.likesCount}  likes </p>    
            </div>
        </div>
    )
}

export default Post;