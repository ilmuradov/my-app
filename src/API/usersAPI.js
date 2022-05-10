import {default as axios} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c549d1ae-fa2e-4900-b3b8-de0f6719b512'
    }
})

export const usersAPI = {
    getUsers(currentPage, itemsOnPage) {
        return instance.get(`users?page=${currentPage}&count=${itemsOnPage}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    onSpanChanged(m, itemsOnPage) {
        return instance.get(`users?page=${m}&count=${itemsOnPage}`)
            .then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    authMe() {
        return instance.get(`auth/me`)
                .then(response => response.data)
    },
    getProfilePhoto(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data.photos)
    }
}