import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
    posts: [
        {id: 1, text: 'HEY)', likesCount: 5},
        {id: 2, text: 'WHAT TIME IS IT?', likesCount: 6}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

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
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export const setStatus = status => ({type: SET_STATUS, status})

export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = userId => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {

        let data = await profileAPI.getStatus(userId)

        dispatch(setStatus(data))
    }
}

export const updateStatus = status => {
    return async (dispatch) => {

       try {
           let data = await profileAPI.updateStatus(status)

           if (data.resultCode === 0) {
               dispatch(setStatus(status))
           }
       } catch (error) {
           console.log(error)
       }

    }
}

export const savePhoto = file => {
    return async (dispatch) => {

        let data = await profileAPI.savePhoto(file)

        if (data.resultCode === 0) {

            dispatch(savePhotoSuccess(data.data.photos))
        }

    }
}

export const saveProfile = formData => {
    return async (dispatch, getState) => {

        const userId = getState().auth.id

        let data = await profileAPI.saveProfile(formData)

        if (data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('profileDataForm', { _error: data.messages[0] }))
            return Promise.reject(data.messages[0])
        }

    }
}

export default profileReducer;

