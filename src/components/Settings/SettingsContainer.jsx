import React from "react";
import {connect} from "react-redux";
import {toggleDayNight} from "../../redux/settings-reducer";
import Settings from "./Settings";

class SettingsContainer extends React.Component{
    render () {
        return <Settings night={this.props.night} toggle={this.props.toggleDayNight}/>
    }
}

const mapStateToProps = (state) => ({
    night: state.settings.night
})

export default connect (mapStateToProps, {toggleDayNight})(SettingsContainer);