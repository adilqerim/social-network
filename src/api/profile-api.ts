import {PhotosType, ProfileType} from "../Types/Types";
import {axiosInstance, APIResponseType} from "./api";


type SavePhotoDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile: (userId: number) => {
        return axiosInstance.get<ProfileType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus: (userId: number) => {
        return axiosInstance.get<string>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus: (status: string) => {
        return axiosInstance.put<APIResponseType>(`profile/status`, {
            status: status
        }).then(response => {
                return response.data
            })
    },

    savePhoto: (file: File) => {
        const formData = new FormData();
        formData.append('image', file)
        return axiosInstance.put<APIResponseType<SavePhotoDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
                return response.data
            })
    },

    saveProfile: (profile: ProfileType) => {

        return axiosInstance.put<APIResponseType>(`profile`, profile)
            .then(response => {
                return response.data
            })
    },
}