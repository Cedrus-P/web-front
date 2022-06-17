import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

// 响应式返回屏幕宽度
const { width } = useWindowSize()

/**
 * 判断当前是否为移动设备，判断依据屏幕宽度是否小于一个指定宽度（1280）
 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态指定 rem 的基准值，最大为40px
 * 根据用户的屏幕宽度进行计算，把计算出的值赋值给 html 标签作为 fontsize 大小
 */
export const useREM = () => {
  // 定义最大的 fontsize
  const MAX_FONT_SIZE = 50

  // 监听 html 文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    // 获取 html 标签
    const html = document.querySelector('html')
    // 获取根元素 fontsize 标准，屏幕宽度 /10
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    // 定义根元素（html） fontSize 大小（rem）
    html.style.fontSize = fontSize + 'px'
  })
}
