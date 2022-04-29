import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import Home_posts from "./Home-posts";
import classes from "./Home.module.css"

const Home = (props) => {
    // const moreUsers = (currentPage) => {
    //     props.setCurrentPage(currentPage + 1)
    // }

    return (
        <div className={props.night ? classes.container__night : classes.container__day}>
            {props.night ?
                <>
                    <div className={classes.header__night}> <h1> Posts </h1> </div>
                    <div className={classes.postsContainer}>
                        {props.isFetching ? <Preloader /> : props.posts.map(m => <Home_posts name={m.name} status={m.status} photo={m.photos.small} key={m.id} night={props.night} />)}
                        <button onClick={props.getNewPosts} className={classes.btn}> More </button>
                    </div>
                </>
                :
                <>
                    <div className={classes.header__day}> <h1> Posts </h1> </div>
                    <div className={classes.postsContainer__day}>
                        {props.isFetching ? <Preloader /> : props.posts.map(m => <Home_posts name={m.name} status={m.status} photo={m.photos.small} key={m.id} night={props.night} />)}
                        <button onClick={props.getNewPosts} className={classes.btn__day}> More </button>
                    </div>
                </>
            }
        </div>
    )
}

export default Home;