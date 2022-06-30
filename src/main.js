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
import useTheme from './utils/theme'
// 初始化主题
useTheme()
useREM()
createApp(App).use(mLibs).use(store).use(router).mount('#app')
