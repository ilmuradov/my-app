import React from 'react';
import classes from "./Users.module.css";
import UsersElements from "./Users-Elements/UsersElements";
import Preloader from "../Common/Preloader/Preloader";

const Users = (props) => {
    console.log(props.isNight)
    const pagesCount = Math.ceil( props.totalCount / props.itemsOnPage );
    const pages = [];
    for( let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {
            props.isNight ? 
                <div className={classes.container}>
                    <div className={classes.pagination}>
                        {pages.map(m => {
                            return <span onClick={() => {props.onSpanChanged(m)}} className={props.currentPage === m ? classes.active : classes.nonActive} key={m}> {m} </span>
                        })}
                    </div>

                    <div className={classes.users}>
                        <h3> Users: </h3>
                    </div>

                    <div className={classes.items}>
                        { props.isFetching
                            ? <Preloader />
                            : props.users.map(m =>
                                <UsersElements follow={props.follow} unfollow={props.unfollow}
                                            userId={m.id} userPhoto={m.photos.small} name={m.name}
                                            isOnline={m.status} followed={m.followed}
                                            isFollowingFetching={props.isFollowingFetching}
                                            toggleIsFollowingFetching={props.toggleIsFollowingFetching}
                                            key={m.id}/>) }
                        {/*<button onClick={props.onButtonClick} className={classes.btn}> ... </button>*/}
                    </div>
                </div>
                
                :

                <div className={classes.container_day}>
                    <div className={classes.pagination}>
                        {pages.map(m => {
                            return <span onClick={() => {props.onSpanChanged(m)}} className={props.currentPage === m ? classes.active : classes.nonActive} key={m}> {m} </span>
                        })}
                    </div>

                    <div className={classes.users}>
                        <h3> Users: </h3>
                    </div>

                    <div className={classes.items}>
                        { props.isFetching
                            ? <Preloader />
                            : props.users.map(m =>
                                <UsersElements follow={props.follow} unfollow={props.unfollow}
                                            userId={m.id} userPhoto={m.photos.small} name={m.name}
                                            isOnline={m.status} followed={m.followed}
                                            isFollowingFetching={props.isFollowingFetching}
                                            toggleIsFollowingFetching={props.toggleIsFollowingFetching}
                                            key={m.id}/>) }
                        {/*<button onClick={props.onButtonClick} className={classes.btn}> ... </button>*/}
                    </div>
                </div>
            }
        </>

)
}


export default Users;