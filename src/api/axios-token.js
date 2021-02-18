import axios from 'axios'
// import { Toast } from 'vant'
// import { baseUrl } from '@env'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// POST传参序列化 检验token 且接口携带token 全局配置
instance.interceptors.request.use(config => {
  if (config.data?.withToken) {
    const token = sessionStorage.getItem('token')
    config.headers['token'] = token
  }
  return config
},(error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  const { data } = response
  return Promise.reject(response)
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
