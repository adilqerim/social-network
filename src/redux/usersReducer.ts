import {ResultCodesEnum} from "../api/api";
import {UserType} from "../Types/Types";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../api/users-api";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users ids
}



const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_FOLLOWING_PROGRESS':
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
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => ({
        type: 'TOGGLE_FOLLOWING_PROGRESS', followingInProgress, userId
    } as const)
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
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
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
