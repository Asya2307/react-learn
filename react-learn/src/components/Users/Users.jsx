import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/img/user.jpg'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++ ) {
        pages.push(i);
    }
    return <div>
        <div>
            <ul className={styles.pagination}>
                {pages.map(p => {
                    return <li className={p === props.currentPage && styles.selected}>
                        <button onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</button>
                    </li>
                })}
            </ul>
        </div>
        {
            props.users.map(u => <div>
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
