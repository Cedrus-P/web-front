<script>
// 1. 指定所有可选位置的常量，并生成 enum
const PROP_DIRACTION = {
  // 左上
  TOP_LEFT: 'top-left',
  // 右上
  TOP_RIGHT: 'top-right',
  // 左下
  BOTTOM_LEFT: 'bottom-left',
  // 右下
  BOTTOM_RIGHT: 'bottom-right'
}

const placementEnum = [
  PROP_DIRACTION.TOP_LEFT,
  PROP_DIRACTION.TOP_RIGHT,
  PROP_DIRACTION.BOTTOM_LEFT,
  PROP_DIRACTION.BOTTOM_RIGHT
]
</script>

<script setup>
/**
 * 1. 指定所有可选位置的常量，并生成 enum
 * 2. 通过 prop 控制指定位置
 * 3. 获取元素的 DOM. 创建读取元素尺寸的方法
 * 4. 生成气泡的样式对象，用来控制每个位置对应的样式
 * 5. 根据 prop，计算样式对象
 */

import { nextTick } from 'process'
import { ref, watch } from 'vue'

// 2. 通过 prop 控制指定位置
const props = defineProps({
  // 控制气泡弹出位置，给出开发者错误提示
  placement: {
    type: String,
    default: PROP_DIRACTION.BOTTOM_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(
          `你的 placement 必须是 ${placementEnum.join('、 ')} 中的一个`
        )
      }
      return result
    }
  }
})

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

/**
 * 3. 获取元素的 DOM. 创建读取元素尺寸的方法
 */
const referenceTarget = ref(null)
const contentTarget = ref(null)
const useElementSize = (target) => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

/**
 * 4. 生成气泡的样式对象，用来控制每个位置对应的样式
 */
const contentStyle = ref({
  top: 0,
  left: 0
})

/**
 * 5. 根据 prop，计算样式对象
 */
watch(isVisable, (val) => {
  if (!val) {
    return
  }
  // 等待渲染成功
  nextTick(() => {
    switch (props.placement) {
      // 左上
      case PROP_DIRACTION.TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case PROP_DIRACTION.TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
      // 左下
      case PROP_DIRACTION.BOTTOM_LEFT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 10 + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case PROP_DIRACTION.TOP_LEFT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 10 + 'px'
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
    }
  })
})
</script>

<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseLeave">
    <div ref="referenceTarget">
      <!-- 具名插槽：触发弹层的视图 -->
      <slot name="reference"> </slot>
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        ref="contentTarget"
        v-show="isVisable"
        class="absolute p-1 bg-white border rounded-[5px]"
        :style="contentStyle"
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
