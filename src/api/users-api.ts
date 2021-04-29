import {GetUsersType} from "../Types/Types";
import {axiosInstance, APIResponseType} from "./api";


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) => {
        return axiosInstance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => {
                return response.data
            })
    },

    followUser: (userId: number) => {
        return axiosInstance.post<APIResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    unfollowUser: (userId: number) => {
        return axiosInstance.delete<APIResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}