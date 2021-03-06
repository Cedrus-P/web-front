// import svgIcon from './svg-icon/index.vue'
// import popup from './popup/index.vue'

// 自动组件注册
import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // app.component('m-svg-icon', svgIcon)
    // app.component('m-popup', popup)

    // 1. 获取当前路径下所有文件夹中的 index.vue
    const components = import.meta.glob('./*/index.vue')
    // console.log(components)
    // 2. 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      // console.log(fn)
      // 拼接组件注册的 name
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      // console.log(componentName)
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      // 3. 利用 app.component 进行注册
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
