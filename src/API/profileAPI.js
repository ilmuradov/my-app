import {default as axios} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c549d1ae-fa2e-4900-b3b8-de0f6719b512'
    }
})

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus() {
        return instance.put(`profile/status`)
    },
    authMe() {
        return instance.get(`auth/me`)
    }
}