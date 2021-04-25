import axios from "axios";
import {ProfileType, UsersType, UserType} from "../Types/Types";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2a8d8ce3-a4a1-4df0-a097-633d8850e8c4'
    }

})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}


type FollowUnfollowUserType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    followUser: (userId: number) => {
        return axiosInstance.post<FollowUnfollowUserType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    unfollowUser: (userId: number) => {
        return axiosInstance.delete<FollowUnfollowUserType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

type UpdateStatusResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}

type SavePhotoResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {
        small: string
        large: string
    }
}

type SaveProfileResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}

export const profileAPI = {
    getProfile: (userId: number) => {
        return axiosInstance.get<ProfileType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus: (userId: number) => {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus: (status: string) => {
        return axiosInstance.put<UpdateStatusResponseType>(`profile/status`, {
            status: status
        })
            .then(response => {
                return response.data
            })
    },

    savePhoto: (file: any) => {

        const formData = new FormData();

        formData.append('image', file)

        return axiosInstance.put<SavePhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },

    saveProfile: (profile: ProfileType) => {

        return axiosInstance.put<SaveProfileResponseType>(`profile`, profile)
            .then(response => {
                return response.data
            })
    },
}

type AuthMeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: any
}

export const authAPI = {
    me: () => {
        return axiosInstance.get<AuthMeResponseType>('auth/me')
            .then(response => {
                return response.data
            })
    },

    login: (email: string, password: string, rememberMe = false, captcha: null | string = null) => {
        return axiosInstance.post<LoginResponseType>('auth/login', {
            email, password, rememberMe, captcha
        })
            .then(response => {
                return response.data
            })
    },

    logout: () => {
        return axiosInstance.delete('auth/login')
            .then(response => {
                return response.data
            })
    },
}

type CaptchaResponseType = {
    url: string
}

export const securityAPI = {
    getCaptcha: () => {
        return axiosInstance.get<CaptchaResponseType>('security/get-captcha-url')
            .then(response => {
                return response.data
            })
    },

}

