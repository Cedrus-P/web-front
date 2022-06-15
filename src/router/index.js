import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 创建vueRouter实例
const router = createRouter({
  history: createWebHistory(),
  // true 就返回移动端路由表，否则返回网页端路由表
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
