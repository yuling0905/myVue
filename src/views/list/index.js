import axios from 'axios'

// get
export function getUserAuth() {
    return axios.get(`${process.env.VUE_APP_API_ROOT}/user/principal`)
}
// pot
export function postAxios(data = {}) {
    return axios.post(`${process.env.VUE_APP_API_ROOT}/`, data)
}