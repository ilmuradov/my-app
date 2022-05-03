import React from 'react';
import classes from './Profile.module.css';
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
    console.log(props)
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <>
            {props.night ?
                <div className={classes.profile}>
                    <div className={classes.container}>
                        {props.profile.photos.large ?
                            <img alt='' className={classes.avatarPhoto} src={props.profile.photos.large}/>
                            :
                            <div className={classes.photoNull}></div>}

                        <div className={classes.info}>
                            <h2 className={classes.fullName}> {props.profile.fullName} </h2>

                            <div>
                                {props.profile.lookingForAJob ?
                                    <div className={classes.looking}>
                                        <h4> Looking for job </h4>
                                        <div className={classes.description}> <p> Job description: {props.profile.lookingForAJobDescription} </p> </div>
                                    </div>
                                    :
                                    <p> Not looking for a job </p>
                                }
                            </div>

                            <div>
                                <p>{props.profile.aboutMe}</p>
                            </div>
                        </div>
                    </div>
                </div>

                :

                <div className={classes.profile__day}>
                    <div className={classes.container__day}>
                        {props.profile.photos.large ?
                            <img alt='' className={classes.avatarPhoto__day} src={props.profile.photos.large}/>
                            :
                            <div className={classes.photoNull__day}></div>}

                        <div className={classes.info__day}>
                            <h2 className={classes.fullName__day}> {props.profile.fullName} </h2>

                            <div>
                                {props.profile.lookingForAJob ?
                                    <div className={classes.looking__day}>
                                        <h4> Looking for job </h4>
                                        <div className={classes.description__day}> <p> Job description: {props.profile.lookingForAJobDescription} </p> </div>
                                    </div>
                                    :
                                    <p> Not looking for a job </p>
                                }
                            </div>

                            <div>
                                <p>{props.profile.aboutMe}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile;