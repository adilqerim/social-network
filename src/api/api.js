import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2a8d8ce3-a4a1-4df0-a097-633d8850e8c4'
    }

})


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    followUser: (userId) => {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    unfollowUser: (userId) => {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    me: () => {
        return axiosInstance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getProfile: (profileId = 2) => {
        return axiosInstance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    }
}
