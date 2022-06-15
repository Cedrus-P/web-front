import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// 注册路由
import router from './router'

createApp(App).use(router).mount('#app')
