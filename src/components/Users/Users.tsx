import React from 'react'
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../Types/Types";
import classnames from 'classnames'
import User from "./User/User";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onCurrentPageChanged: (page: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({
                                        totalUsersCount, pageSize,
                                        currentPage, onCurrentPageChanged,
                                        users, followingInProgress,
                                        follow, unfollow
                                    }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={classnames({
                    [styles.selectedPage]: currentPage === p
                })}
                             onClick={() => {
                                 onCurrentPageChanged(p)
                             }}> {p} </span>
            })}

        </div>
        {
            users.map(u => {
                return <User user={u}
                             followingInProgress={followingInProgress}
                             follow={follow}
                             unfollow={unfollow}/>
            })
        }
    </div>
}

export default Users