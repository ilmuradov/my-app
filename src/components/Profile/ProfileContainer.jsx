import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfile,
    toggleIsFetching,
    profilePageThunkCreator
} from "../../redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {withNavigate} from "../../hoc/withNavigate";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 23133;
        this.props.profilePageThunkCreator(userId)
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
    isFetching: state.profilePage.isFetching,
    night: state.settings.night
})

export default compose(
    connect(mapStateToProps,
        {setUserProfile, toggleIsFetching, profilePageThunkCreator}),
    withNavigate
) (ProfileMatch)