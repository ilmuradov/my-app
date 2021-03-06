import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfile,
    toggleIsFetching,
    getProfile,
    getStatus,
    updateStatus
} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {compose} from "redux";
// import {withNavigate} from "../../hoc/withNavigate";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 23133;
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} />   
    }
}

const ProfileMatch = (props) => {
    let match = useMatch('/profile/:userId')
    return <ProfileContainer {...props} match={match}/>
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.header.userId,
    isFetching: state.profilePage.isFetching,
    night: state.settings.night
})

export default compose(
    connect(mapStateToProps,
        {setUserProfile, toggleIsFetching, getProfile, getStatus, updateStatus}),
    // withNavigate
) (ProfileMatch)