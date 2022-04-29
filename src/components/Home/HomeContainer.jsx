import React from "react";
import Home from "./Home";
import {homeAPI} from "../../API/homeAPI";
import {setCurrentPage, setPosts, setTotalCount, toggleIsFetching} from "../../redux/home-reducer";
import {connect} from "react-redux";

class HomeContainer extends React.Component {
    componentDidMount() {
        if (this.props.posts.length === 0) {
            this.props.toggleIsFetching(true);
            homeAPI.getUsers(this.props.currentPage, this.props.itemsOnPage)
                .then(response => {
                    response.items.map(m => {
                        if (m.status) {
                            this.props.setPosts(m)
                        }
                    })
                    this.props.toggleIsFetching(false)
                    this.props.setTotalCount(response.totalCount)
                });
        }
    }

    getNewPosts = () => {
        let currentPage = this.props.currentPage;
        this.props.setCurrentPage(currentPage + 1)
        homeAPI.getNewPosts(this.props.currentPage, this.props.itemsOnPage)
            .then(response => {
                response.items.map(m => {
                    if(m.status) {
                        this.props.setPosts(m)
                    }
                })
            })
    }

    render() {
        return <Home posts={this.props.posts} isFetching={this.props.isFetching}
                     getNewPosts={this.getNewPosts} currentPage={this.props.currentPage}
                     night={this.props.night}/>;
    }
}

const mapStateToProps = (state) => ({
    posts: state.homePage.posts,
    currentPage: state.homePage.currentPage,
    totalCount: state.homePage.totalCount,
    itemsOnPage: state.homePage.itemsOnPage,
    isFetching: state.homePage.isFetching,
    night: state.settings.night
})

export default connect(mapStateToProps, {setPosts, toggleIsFetching, setTotalCount, setCurrentPage})(HomeContainer);