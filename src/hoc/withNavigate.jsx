import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to='/login' />
            else return <Component {...this.props} />
        }
    }
    return compose(
        connect(mapStateToProps)
    )(NavigateComponent)
}