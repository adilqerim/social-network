import {axiosInstance, APIResponseType, ResultCodeForCaptcha, ResultCodesEnum} from "./api";

type AuthMeDataType = {
    id: number,
    email: string,
    login: string
}
type LoginDataType = {
    userId: number
}

export const authAPI = {
    me: () => {
        return axiosInstance.get<APIResponseType<AuthMeDataType>>('auth/me')
            .then(response => {
                return response.data
            })
    },

    login: (email: string, password: string, rememberMe = false, captcha: null | string = null) => {
        return axiosInstance.post<APIResponseType<LoginDataType, ResultCodesEnum | ResultCodeForCaptcha>>('auth/login', {
            email, password, rememberMe, captcha
        })
            .then(response => {
                return response.data
            })
    },

    logout: () => {
        return axiosInstance.delete<APIResponseType>('auth/login')
            .then(response => {
                return response.data
            })
    },
}