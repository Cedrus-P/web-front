<script setup>
import { ref } from 'vue'

/**
 * 状态切换处理
 */
const isOpenCategoty = ref(false)
const triggerState = () => {
  isOpenCategoty.value = !isOpenCategoty.value
}
/**
 * 选中状态处理
 */
const currentCategoryIndex = ref(0)
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
</script>

<template>
  <div class="sticky dark:bg-slate-900 top-0 left-0 w-full">
    <ul
      :class="[isOpenCategoty ? 'h-[206px]' : 'h-[56px]']"
      class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 dark:text-slate-300 duration-300 overflow-hidden mx-auto"
    >
      <!-- lg 下展开箭头 -->
      <div
        @click="triggerState"
        class="absolute right-0 dark:hover:bg-slate-600/60 bottom-0.5 z-20 p-1 rounded-xl cursor-pointer duration-200 hover:bg-zinc-200"
      >
        <m-svg-icon
          :name="isOpenCategoty ? 'fold' : 'unfold'"
          class="w-1 h-1"
          fillClass="fill-zinc-900 dark:fill-slate-300"
        ></m-svg-icon>
      </div>
      <!-- category item -->
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        :class="{
          'text-white bg-teal-600 dark:bg-teal-500/60':
            currentCategoryIndex === index
        }"
        @click="onItemClick(index)"
        class="shrink-0 px-1 py-0 z-10 duration-300 last:mr-4 text-sm font-bold h-3 leading-3 cursor-pointer hover:bg-teal-600 dark:hover:bg-teal-500/60 hover:text-white rounded-xl mr-1 mt-1"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
