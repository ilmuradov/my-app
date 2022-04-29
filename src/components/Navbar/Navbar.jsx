import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

import home from '../../assets/images/Home/home.png'
import home__active from '../../assets/images/Home/home__active.png'
import home_day from '../../assets/images/Home/home_day.png'
import home__active_day from '../../assets/images/Home/home__active_day.png'

import messages from '../../assets/images/Messages/messenger.png'
import messages__active from './../../assets/images/Messages/messenger__active.png'
import messages_day from './../../assets/images/Messages/messenger_day.png'
import messages__active_day from './../../assets/images/Messages/messenger__active_day.png'

import newPost from '../../assets/images/New-Post/new_post.png'
import newPost__active from '../../assets/images/New-Post/new_post__active.png'
import newPost_day from '../../assets/images/New-Post/new_post_day.png'
import newPost__active_day from '../../assets/images/New-Post/new_post__active_day.png'

import explore from '../../assets/images/Explore/explore.png'
import explore__active from '../../assets/images/Explore/explore__active.png'
import explore_day from '../../assets/images/Explore/explore_day.png'
import explore__active_day from '../../assets/images/Explore/explore__active_day.png'

import activity from '../../assets/images/Activity/activity.png'
import activity__active from '../../assets/images/Activity/activity__active.png'
import activity_day from '../../assets/images/Activity/activity_day.png'
import activity__active_day from '../../assets/images/Activity/activity__active_day.png'

import profile from '../../assets/images/user.png'


const Navbar = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <NavLink to='/home' onClick={() => {props.toggleHome(true)}}>
                    {props.night ?
                        <img src={props.home ? home__active : home}/>
                        :
                        <img src={props.home ? home__active_day : home_day}/>
                    }
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/messages' onClick={() => {props.toggleMessages(true)}}>
                    {props.night ?
                        <img src={props.messages ? messages__active : messages}/>
                        :
                        <img src={props.messages ? messages__active_day : messages_day}/>
                    }
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/newPost' onClick={() => {props.toggleAddNew(true)}}>
                    {props.night ?
                        <img src={props.addNew ? newPost__active : newPost}/>
                        :
                        <img src={props.addNew ? newPost__active_day : newPost_day}/>
                    }
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/users' onClick={() => {props.toggleExplore(true)}}>
                    {props.night ?
                        <img src={props.explore ? explore__active : explore}/>
                        :
                        <img src={props.explore ? explore__active_day : explore_day}/>
                    }
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/activity' onClick={() => {props.toggleLikes(true)}}>
                    {props.night ?
                        <img src={props.likes ? activity__active : activity}/>
                        :
                        <img src={props.likes ? activity__active_day : activity_day}/>
                    }
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to='/profile' onClick={() => {props.toggleProfile(true)}}>
                    <img className={classes.img} src={!props.photo ? profile : props.photo}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;