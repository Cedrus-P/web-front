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
/**
 * menu 切换事件
 * @param {*} theme
 */
const onItemClick = (theme) => {
  store.commit('theme/changeThemeType', theme.type)
}

// 控制图标展示
const store = useStore()
const svgIconName = computed(() => {
  // 根据当前的 themeType 返回当前的选中 icon
  const findTheme = themeArr.find((theme) => {
    return theme.type === store.getters.themeType
  })
  return findTheme.icon
})
</script>
<template>
  <div class="demo-container">
    <m-pophover placement="bottom-left">
      <template #reference>
        <m-svg-icon
          :name="svgIconName"
          fillClass="fill-zinc-900 dark:fill-slate-300"
          class="w-4 h-4 p-1 dark:hover:bg-slate-900 cursor-pointer rounded-xl duration-200 outline-none hover:bg-slate-200/40"
        ></m-svg-icon>
      </template>
      <!-- 匿名插槽 -->
      <div
        class="w-[140px] overflow-hidden dark:bg-slate-800 dark:border-b-slate-700"
        v-for="item in themeArr"
        :key="item.id"
        @click="onItemClick"
      >
        <div
          class="flex dark:hover:bg-slate-700 items-center p-1 cursor-pointer rounded hover:bg-slate-200/40"
        >
          <m-svg-icon
            :name="item.icon"
            fillClass="fill-zinc-600 dark:fill-slate-300"
            class="w-1.5 h-1.5 mr-1"
          ></m-svg-icon>
          <span class="text-zinc-600 dark:text-slate-300 text-sm">{{
            item.name
          }}</span>
        </div>
      </div>
    </m-pophover>
  </div>
</template>
<style lang="scss" scoped></style>
