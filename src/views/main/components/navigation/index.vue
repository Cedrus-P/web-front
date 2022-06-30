<template>
  <mobile-navigation-vue v-if="isMobileTerminal" class="duration-500" />
  <pc-navigation-vue v-else class="duration-500" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()
// 触发 category 数据获取动作
store.dispatch('category/useCategoryData')
// console.log(store)
</script>
