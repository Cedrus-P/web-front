import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// 注册路由
import router from './router'
// rem 基准值
import { useREM } from './utils/flexible'
useREM()

createApp(App).use(router).mount('#app')
