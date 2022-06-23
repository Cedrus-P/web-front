<script setup>
import { ref } from 'vue'

const isVisable = ref(false)

/**
 * 鼠标移入触发
 */
const onMouseenter = () => {
  isVisable.value = true
}
/**
 * 鼠标移出触发
 */
const onMouseLeave = () => {
  isVisable.value = false
}
</script>
<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseLeave">
    <div>
      <!-- 具名插槽：触发弹层的视图 -->
      <slot name="reference"> </slot>
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        v-show="isVisable"
        class="absolute p-1 bg-white border rounded-[5px]"
      >
        <!-- 匿名插槽：弹出层视图中展示的内容 -->
        <slot />
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
