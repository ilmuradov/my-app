import React from "react";
import Home from "./Home";
import {setCurrentPage, setPosts, setTotalCount, toggleIsFetching, getPostsTC, getNewPostsTC} from "../../redux/home-reducer";
import {connect} from "react-redux";
import {withNavigate} from "../../hoc/withNavigate";
import {compose} from "redux";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.getPostsTC(this.props.posts, this.props.currentPage, this.props.itemsOnPage)
    }

    getNewPosts = () => {
        this.props.getNewPostsTC(this.props.currentPage, this.props.itemsOnPage)
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

export default compose(
    connect(mapStateToProps, {setPosts, toggleIsFetching, setTotalCount, setCurrentPage, getPostsTC, getNewPostsTC}),
    withNavigate
)(HomeContainer);