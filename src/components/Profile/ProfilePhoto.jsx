import React from "react";
import classes from './ProfilePhoto.module.css';

class ProfilePhoto extends React.Component {
    render() {
        return(
            <img className={classes.profilePhoto} alt="" src={this.props.src} />
        )
    }
}

export default ProfilePhoto;