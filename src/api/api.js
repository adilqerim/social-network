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

export const profileAPI = {
    getProfile: (profileId) => {
        return axiosInstance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus: (profileId) => {
        return axiosInstance.get(`profile/status/${profileId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus: (status) => {
        return axiosInstance.put(`profile/status`, {
            status: status
        })
            .then(response => {
                return response.data
            })
    },

    savePhoto: (file) => {

        const formData = new FormData();

        formData.append('image', file)

        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })
    },

    saveProfile: (profile) => {

        return axiosInstance.put(`profile`, profile)
            .then(response => {
                return response.data
            })
    },
}


export const authAPI = {
    me: () => {
        return axiosInstance.get('auth/me')
            .then(response => {
                return response.data
            })
    },

    login: (email, password, rememberMe) => {
        return axiosInstance.post('auth/login', {
            email, password, rememberMe
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

