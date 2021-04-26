import {axiosInstance} from "./api";

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