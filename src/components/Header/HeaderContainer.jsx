import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/auth-reducer";
import {authMeThunkCreator, setHeaderInfo, toggleIsFetching} from "../../redux/header-reducer";
import {toggleAddNew, toggleExplore, toggleHome, toggleLikes, toggleMessages,} from "../../redux/navbar-reducer";
import { compose } from 'redux'

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMeThunkCreator()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    photo: state.header.info,
    isFetching: state.header.isFetching,
    night: state.settings.night,
    home: state.navbar.home,
    messages: state.navbar.messages,
    addNew: state.navbar.addNew,
    explore: state.navbar.explore,
    likes: state.navbar.likes,
    profile: state.navbar.profile
})

export default compose(
    connect(mapStateToProps, 
    {setAuthData, setHeaderInfo, 
    toggleIsFetching,toggleHome, toggleMessages,
    toggleAddNew, toggleExplore,
    toggleLikes, authMeThunkCreator}))(HeaderContainer);