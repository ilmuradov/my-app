import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css'; 

const MyPosts = (props) => {
    const messagesElements = props.posts.map( m =>  <Post name={m.name} message={m.message} likesCount={m.likes}/> )

    const newPost = () => {
        props.newPostCreator();
    }

    const typeNewPostText = (e) => {
        e = e.target.value;
        props.typeNewPostCreator(e);
    }

    return (
        <div className={classes.container}>
            <div className={classes.h__container}>
                <h2> Posts </h2>
            </div>

            <div className={classes.addPosts}>
                <textarea onChange={typeNewPostText} placeholder='Type new post text...' value={props.newPostText} />
                <button onClick={newPost}> Add post </button>
            </div>

            {messagesElements}

        </div>
    )
}

export default MyPosts;