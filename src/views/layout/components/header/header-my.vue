<script setup>
import mPophover from '@/libs/pophover/index.vue'
import mSvgIcon from '@/libs/svg-icon/index.vue'

// 构建 menu 数据源
const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级 VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]
</script>
<template>
  <m-pophover class="flex items-center" placement="bottom-left">
    <template #reference>
      <div
        class="guide-my pl-1 pr-1 relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100"
      >
        <!-- 头像 -->
        <img src="src/assets/common/img/avatar.jpg" class="w-4 rounded-xl" />
        <!-- 下箭头 -->
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-800"
        ></m-svg-icon>
        <!-- vip 标记 -->
        <m-svg-icon
          name="vip"
          class="w-1.5 h-1.5 absolute right-[30px] bottom-0"
        ></m-svg-icon>
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        v-for="item in menuArr"
        :key="item.id"
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-2 h-2 mr-1"
          fillClass="fill-zinc-600"
        ></m-svg-icon>
        <span class="text-zinc-600 text-sm">{{ item.title }}</span>
      </div>
    </div>
  </m-pophover>
</template>
<style lang="scss" scoped></style>
