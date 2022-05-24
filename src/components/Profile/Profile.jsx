import React from 'react';
import classes from './Profile.module.css';
import Preloader from '../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import ProfilePhoto from './ProfilePhoto';

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <>
            {props.night ?
                <div className={classes.profile}>
                    <div className={classes.container}>
                        {props.profile.photos.large ?
                            <ProfilePhoto src={props.profile.photos.large} />
                            :
                            <div className={classes.photoNull}></div>
                        }

                        <div className={classes.info}>
                            <div className={classes.username}>
                                <h2 className={classes.fullName}> {props.profile.fullName} </h2>
                                {props.profile.lookingForAJob ? <h4> Looking for a job </h4> : null}
                            </div>
                            <div>
                                {props.profile.lookingForAJob ?
                                    <p>
                                        <b> Job description: </b> {props.profile.lookingForAJobDescription}
                                    </p>
                                    :
                                    <p> Not looking for a job </p>
                                }
                            </div>

                            <div className={classes.statusPlace}>
                                <h4> Status: </h4>
                                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                            </div>

                            { props.profile.aboutMe ? 
                                <div>
                                    <h3> About me: </h3>
                                    <p> {props.profile.aboutMe} </p>
                                </div>
                                :
                                null
                            }
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
                                        <div className={classes.description__day}>
                                            <p>
                                                <b> Job description: </b> {props.profile.lookingForAJobDescription}
                                            </p>
                                        </div>
                                    </div>
                                    :
                                    <p> Not looking for a job </p>
                                }
                            </div>

                            <div className={classes.aboutMe__day}>
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