<script setup>
import mPophover from '@/libs/pophover/index.vue'
import mSvgIcon from '@/libs/svg-icon/index.vue'

import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'

// 构建渲染数据源
const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]
</script>
<template>
  <div class="demo-container">
    <m-pophover placement="bottom-left">
      <template #reference>
        <m-svg-icon
          name="theme-light"
          fillClass="fill-zinc-900"
          class="w-4 h-4 p-1 cursor-pointer rounded-xl duration-200 outline-none hover:bg-slate-200/40"
        ></m-svg-icon>
      </template>
      <!-- 匿名插槽 -->
      <div
        class="w-[140px] overflow-hidden"
        v-for="item in themeArr"
        :key="item.id"
      >
        <div
          class="flex items-center p-1 cursor-pointer rounded hover:bg-slate-200/40"
        >
          <m-svg-icon
            :name="item.icon"
            fillClass="fill-zinc-600"
            class="w-1.5 h-1.5 mr-1"
          ></m-svg-icon>
          <span class="text-zinc-600 text-sm">{{ item.name }}</span>
        </div>
      </div>
    </m-pophover>
  </div>
</template>
<style lang="scss" scoped></style>
