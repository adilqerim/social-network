import {ResultCodesEnum} from "../api/api";
import {UserType} from "../Types/Types";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../api/users-api";
import {updateObjectInArray} from "../utils/object-helpers";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/USERS/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case "SN/USERS/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "SN/USERS/SET_USERS": {
            return {...state, users: action.users}
        }
        case "SN/USERS/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SN/USERS/SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "SN/USERS/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SN/USERS/SET_FILTER":
            return {...state, filter: action.payload}
        case "SN/USERS/TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'SN/USERS/SET_FILTER', payload: filter} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_FOLLOWING_PROGRESS', followingInProgress, userId
    } as const)
}

export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(filter))

        const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
        // return data
    }

export const follow = (userId: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, userId))
        const data = await usersAPI.followUser(userId)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.followSuccess(userId))
        }
        dispatch(actions.toggleFollowingProgress(false, userId))
    }

export const unfollow = (userId: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, userId))
        const data = await usersAPI.unfollowUser(userId)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.unfollowSuccess(userId))
        }
        dispatch(actions.toggleFollowingProgress(false, userId))
    }

export default usersReducer

type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
