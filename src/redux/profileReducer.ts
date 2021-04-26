import {ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../Types/Types";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {profileAPI} from "../api/profile-api";

const initialState = {
    posts: [
        {id: 1, text: 'HEY)', likesCount: 5},
        {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "ADD_POST":
            const newPost = {id: 5, text: action.newPostBody, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }

}

export const actions = {
    addPost: (newPostBody: string) => ({type: 'ADD_POST', newPostBody} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getProfile = (userId: number): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType =>
    async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (file: File): ThunkType =>
    async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType =>
    async (dispatch, getState) => {
        const userId = getState().auth.id

        let data = await profileAPI.saveProfile(profile)

        if (data.resultCode === ResultCodesEnum.Success) {
            if (userId != null) {
                await dispatch(getProfile(userId))
            } else {
                throw new Error('userId can\'t be null' )
            }
        } else {
            dispatch(stopSubmit('profileDataForm', {_error: data.messages[0]}))
            return Promise.reject(data.messages[0])
        }
}

export default profileReducer;

type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType | FormAction>
