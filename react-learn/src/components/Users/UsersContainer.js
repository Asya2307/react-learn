import React from 'react';
import {connect} from 'react-redux';
import  axios from 'axios';
import Users from './Users';
import {
    follow, setCurrentPage,
    toggleIsFetching,
    unfollow, toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/users-reduser";
import Preloader from "../Common/Preloader/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber)
    }

    render() {
        return <>
            { this.props.isFetching && <Preloader /> }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator})(UsersContainer);