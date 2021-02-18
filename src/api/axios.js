import axios from 'axios'
// import { Toast } from 'vant'
// import { baseUrl } from '@env'

// 新建axios实例 否则拦截器会重叠
console.log(process.env.VUE_APP_API_ROOT,"----1")
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 额外配置处理
    return config
}, (error) => {
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
    console.log(response)
    // 对响应数据做点什么
    // const {
    //     data
    // } = response
    // if (data) {
    //     // 微商城返回数据格式
    //     const {
    //         errCode,
    //         errMsg,
    //     } = data
    //     if (errCode !== 0) {
    //         Toast(errMsg)
    //         return Promise.reject(data)
    //     }
    //     return data
    // }
    return Promise.reject(response)
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default instance