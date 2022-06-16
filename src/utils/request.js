import axios from 'axios'

console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = 'C00EEAAFA1D565C0'
  // 必须返回 config
  return config
})

export default service
