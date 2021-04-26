import axios from "axios";

export const axiosInstance = axios.create({
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

export type APIResponseType<D = any, RC = ResultCodesEnum> = {
    resultCode: RC
    messages: Array<string>
    data: D
}