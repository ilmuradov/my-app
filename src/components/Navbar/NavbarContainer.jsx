import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {toggleAddNew, toggleExplore, toggleHome, toggleLikes, toggleMessages,} from "../../redux/navbar-reducer";

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    home: state.navbar.home,
    messages: state.navbar.messages,
    addNew: state.navbar.addNew,
    explore: state.navbar.explore,
    likes: state.navbar.likes,
    profile: state.navbar.profile,
    night: state.settings.night
})

export default connect(mapStateToProps,
    {toggleHome,
    toggleMessages,
    toggleAddNew,
    toggleExplore,
    toggleLikes})(NavbarContainer);