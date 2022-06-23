<script setup>
import mPophover from '@/libs/pophover/index.vue'
import mSvgIcon from '@/libs/svg-icon/index.vue'
</script>
<template>
  <div class="demo-container">
    <m-pophover>
      <template #reference>
        <m-svg-icon
          name="theme-light"
          fillClass="fill-zinc-900"
          class="w-4 h-4 p-1 cursor-pointer rounded-xl duration-200 outline-none hover:bg-slate-200/40"
        ></m-svg-icon>
      </template>
      <!-- 匿名插槽 -->
      <div class="w-[140px] overflow-hidden">
        <div
          class="flex items-center p-1 cursor-pointer rounded hover:bg-slate-200/40"
        >
          <m-svg-icon
            name="theme-light"
            fillClass="fill-zinc-900"
            class="w-1.5 h-1.5 mr-1"
          ></m-svg-icon>
          <span class="text-zinc-800 text-sm">极简白</span>
        </div>
      </div>
    </m-pophover>
  </div>
</template>
<style lang="scss" scoped></style>
