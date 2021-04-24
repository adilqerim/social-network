import {createSelector} from "reselect";
import {AppStateType} from "./reduxStore";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersReselector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
});
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const countSmthDifficult = (state: AppStateType) => {
    //for.... math.... big arrays. filters
    const count = 42
    return count
}

