import axios from 'axios'

console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 响应拦截器：
 * 服务器返回数据之后，前端 .then 之前被调用
 */
service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  // 判断 success 是否为 true , 直接获取 categorys
  if (success) {
    return data
  } else {
    // TODO: 业务错误
    return Promise.reject(new Error(message))
  }
})

/**
 * 请求拦截器
 */
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = 'C00EEAAFA1D565C09C59C01481D2C890'
  // 必须返回 config
  return config
})

export default service
