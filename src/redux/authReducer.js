import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {

    const data = await authAPI.me()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        return data
    }
}
export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const data = authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}
export default authReducer

