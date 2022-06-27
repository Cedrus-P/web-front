<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    require: true,
    type: Boolean
  }
})

// 响应式数据，当 isOpen 发生改变时会触发 emit 修改 modelValue
const isOpen = useVModel(props)

// 滚动锁定
const isLocked = useScrollLock(document.body)
watch(
  isOpen,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>
<template>
  <div class="">
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div
          v-if="isOpen"
          @click="isOpen = false"
          class="w-screen h-screen bg-zinc-800/60 z-40 fixed top-0 left-0"
        ></div>
      </transition>
      <!-- 内容 -->
      <transition name="popup-down-up">
        <div
          v-if="isOpen"
          v-bind="$attrs"
          class="w-screen bg-white dark:bg-slate-800 z-50 fixed bottom-0"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
