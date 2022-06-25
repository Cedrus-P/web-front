import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './styles/index.scss'
// 注册路由
import router from './router'
// rem 基准值
import { useREM } from './utils/flexible'
// 组件注册
import mLibs from './libs'
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(mLibs).store(router).use(router).mount('#app')
