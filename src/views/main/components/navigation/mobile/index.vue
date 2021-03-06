<script setup>
import mSvgIcon from '@/libs/svg-icon/index.vue'
import mPopup from '@/libs/popup/index.vue'
import menuVue from '../../menu/index.vue'
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'

// 滑块样式
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

// 选中item下标
const currentCategoryIndex = ref(0)

// 获取所有item元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}

// 数据改变之后，DOM改变之前
onBeforeUpdate(() => {
  itemRefs = []
})

// 获取ul元素
const ulTarget = ref(null)
// 通过 usescroll 获取响应式 scroll 距离
const { x: ulScrollLeft } = useScroll(ulTarget)

// watch监听
watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()

  // 平滑滚动
  ulTarget.value.scrollTo({
    left:
      left + width + 40 > window.innerWidth || left < 0
        ? ulTarget.value.scrollLeft + left - 10
        : ulScrollLeft.value,
    behavior: 'smooth'
  })

  sliderStyle.value = {
    // 滑块的位置 = ul横向滚动的位置 + 当前元素的left - ul的padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})

// item 点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisable.value = false
}

// 控制popup展示
const isVisable = ref(false)
const onShowPopup = () => {
  isVisable.value = true
}
</script>

<template>
  <div class="bg-white dark:bg-slate-800 sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto items-center p-1 text-xs text-zinc-600 dark:text-zinc-300 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[25px] dark:bg-slate-600 bg-slate-400 rounded-lg duration-300"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        @click="onShowPopup"
        class="z-20 fixed dark:bg-slate-900 dark:shadow-l-slate right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- category item -->
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        :ref="setItemRef"
        @click="onItemClick(index)"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-300 last:mr-4"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisable">
      <menu-vue @onItemClick="onItemClick"></menu-vue>
    </m-popup>
  </div>
</template>

<style lang="scss" scoped></style>
