import React from 'react';
import Header from "./Header";
import {default as axios} from "axios";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/auth-reducer";
import {setHeaderInfo, toggleIsFetching} from "../../redux/header-reducer";
import {usersAPI} from "../../API/usersAPI";

class HeaderContainer extends React.Component{
    componentDidMount() {
            usersAPI.authMe()
            .then(response => {
                let {email, id, login} = response.data;
                if(response.resultCode === 0) {
                    this.props.setAuthData({login, email, userId: id})
                }
                this.props.toggleIsFetching(true)
                    usersAPI.getProfilePhoto(id)
                    .then(response => {
                        this.props.setHeaderInfo(response.small)
                        this.props.toggleIsFetching(false)
                    })
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    photo: state.header.info,
    isFetching: state.header.isFetching,
    night: state.settings.night
})

export default connect(mapStateToProps, {setAuthData, setHeaderInfo, toggleIsFetching})(HeaderContainer);