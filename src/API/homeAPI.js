import {default as axios} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c549d1ae-fa2e-4900-b3b8-de0f6719b512'
    }
})

export const homeAPI = {
    getUsers(currentPage, itemsOnPage) {
        return instance.get(`users?page=${currentPage}&count=${itemsOnPage}`)
            .then(response => response.data)
    },
    getNewPosts(currentPage, itemsOnPage) {
        return instance.get(`users?page=${currentPage + 1}&count=${itemsOnPage}`)
            .then(response => response.data)
    }
}