import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/img/user.jpg'

let Users = (props) => {


    let getUsers = () =>
    {
        if (!props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(
                    response.data.items
                )
            });
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>

        {
            props.users.map(u => <div >
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {/*<span>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*</span>*/}
                </span>
            </div>)
        }
    </div>
}

export default Users;