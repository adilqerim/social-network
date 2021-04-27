import React from 'react'
import {UserType} from "../../Types/Types";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

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
                                        follow, unfollow, ...props
                                    }) => {

    return <div>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onCurrentPageChanged}/>

        {users.map(u => {
            return <User user={u}
                         followingInProgress={followingInProgress}
                         follow={follow}
                         unfollow={unfollow}/>
        })}
    </div>
}
export default Users