import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reduser";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                }
            );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                }
            );
    }

    render () {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    let stateUser = state.usersPage
    return {
        users: stateUser.users,
        pageSize: stateUser.pageSize,
        totalUsersCount: stateUser.totalUsersCount,
        currentPage: stateUser.currentPage,
        isFetching: stateUser.isFetching
    }
}

let mapDispatchToProps = {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);