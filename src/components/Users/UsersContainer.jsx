import { connect } from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingFetching,
    unfollow,
    onSpanChanged, followTC, unfollowTC
} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";

class UsersContainer extends React.Component {
    componentDidMount() {
        if(this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.itemsOnPage)
        }
    }

    onSpanChanged = (m) => {
        this.props.onSpanChanged(m, this.props.itemsOnPage)
    }

    render() {
        return <Users onSpanChanged={this.onSpanChanged}
                      currentPage={this.props.currentPage}
                      totalCount={this.props.totalCount}
                      itemsOnPage={this.props.itemsOnPage}
                      users={this.props.users}
                      isFetching={this.props.isFetching}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followed={this.props.followed}
                      toggleIsFollowingFetching={this.props.toggleIsFollowingFetching}
                      isFollowingFetching={this.props.isFollowingFetching}
                      night={this.props.night}
                      followTC={this.props.followTC}
                      unfollowTC={this.props.unfollowTC}  />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        itemsOnPage: state.usersPage.itemsOnPage,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followed: state.usersPage.users.followed,
        isFollowingFetching: state.usersPage.isFollowingFetching,
        night: state.settings.night
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleIsFollowingFetching,
    getUsers,
    onSpanChanged,
    followTC,
    unfollowTC
})(UsersContainer);