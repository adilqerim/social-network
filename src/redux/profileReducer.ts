import {profileAPI, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'


const initialState = {
    posts: [
        {id: 1, text: 'HEY)', likesCount: 5},
        {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 5, text: action.newPostBody, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }

}

type ActionsTypes = AddPostActionType | SetUserProfileActionType |
                    SetStatusActionType | SavePhotoSuccessActionType

type AddPostActionType = {
    type: typeof ADD_POST
    newPostBody: string
}

export const addPost = (newPostBody: string): AddPostActionType => ({type: ADD_POST, newPostBody})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
})

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProfile = (userId: number): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status: string): ThunkType =>
    async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (file: any): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(data.data))
    }
}

export const saveProfile = (profile: ProfileType) =>
    async (dispatch: any, getState: any) => {

        const userId = getState().auth.id

        let data = await profileAPI.saveProfile(profile)

        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('profileDataForm', {_error: data.messages[0]}))
            return Promise.reject(data.messages[0])
        }
}

export default profileReducer;

