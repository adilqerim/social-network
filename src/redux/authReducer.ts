import {ResultCodeForCaptcha, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SN/AUTH/SET_USER_DATA':
        case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/AUTH/SET_USER_DATA',
        payload: {id, email, login, isAuth}
    }),
    getCaptchaUrlSuccess: (captchaUrl: string) => {
        return {
            type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
        }
    }
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {

    const meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => {
    return async (dispatch) => {
        const loginData = await authAPI.login(email, password, rememberMe, captcha)

        if (loginData.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): ThunkType => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptcha()
        dispatch(actions.getCaptchaUrlSuccess(data.url))
    }
}

export default authReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

