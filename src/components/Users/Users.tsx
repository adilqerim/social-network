import React, {useEffect} from 'react'
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import {UsersSearchForm} from "./User/UsersSearchForm";
import {FilterType, getUsers} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersReselector
} from "../../redux/usersSelectors";

export const Users: React.FC = () => {

    const users = useSelector(getUsersReselector)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getUsers(currentPage, pageSize, filter))
    }, [])

    const onCurrentPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }


    return <div>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onCurrentPageChanged}/>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        {users.map(user => {
            return <User user={user}/>
        })}
    </div>
}

