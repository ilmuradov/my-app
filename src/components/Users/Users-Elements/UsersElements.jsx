import React from 'react';
import classes from './UsersElements.module.css';
import userPhoto from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/usersAPI";

const UsersElements = (props) => {
    // const changeFollow = () => {
    //     if (props.followed === true) {
    //             usersAPI.unfollow(props.userId)
    //             .then(response => {
    //                 if(response.resultCode === 0) {
    //                     props.unfollow(props.userId)
    //                 }
    //             })
    //     } else if (props.followed === false) {
    //     }
    // }
    //
    // const isFollowed = () => {
    //     if(props.followed === true) {
    //         return ("Unfollow")
    //     } else if(props.followed === false) {
    //         return ("Follow")
    //     }
    // }

    return (
        <>
            {props.night ?
                <div className={classes.container}>
                    <div className={classes.photoAndName}>
                        <img className={classes.photo} src={props.userPhoto != null ? props.userPhoto : userPhoto} />
                        <NavLink to={`/profile/${props.userId}`} className={classes.name}>
                            <h4> {props.name} {props.surname} </h4>
                        </NavLink>
                    </div>
                    <div className={classes.isOnline}> {props.isOnline} </div>
                    <button onClick={() => {props.followed ? props.unfollowTC(props.userId) : props.followTC(props.userId)}}
                            className={!props.followed
                                ? classes.btn__green
                                : classes.btn__red}> {props.followed
                        ? <p> Unfollow </p>
                        : <p> Follow </p>}
                    </button>
                    {/*<button className={classes.followed} onClick={changeFollow}> {isFollowed()} </button>*/}
                </div>

                :

                <div className={classes.container__day}>
                    <div className={classes.photoAndName__day}>
                        <img className={classes.photo__day} src={props.userPhoto != null ? props.userPhoto : userPhoto} />
                        <NavLink to={`/profile/${props.userId}`} className={classes.name__day}>
                            <h4> {props.name} {props.surname} </h4>
                        </NavLink>
                    </div>
                    <div className={classes.isOnline__day}> {props.isOnline} </div>
                    <button onClick={() => props.followed ? props.unfollowTC(props.userId) : props.followTC(props.userId)}
                            className={!props.followed
                                ? classes.btn__green__day
                                : classes.btn__red__day}> {props.followed
                        ? <p> Unfollow </p>
                        : <p> Follow </p>}
                    </button>
                    {/*<button className={classes.followed} onClick={changeFollow}> {isFollowed()} </button>*/}
                </div>
            }
        </>
    )
}

export default UsersElements;
