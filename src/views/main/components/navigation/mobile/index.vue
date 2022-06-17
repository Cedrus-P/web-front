<script setup>
// vite 构建的项目中，我们可以使用 defineProps 方法
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-sm text-zinc-600 overflow-hidden"
    >
      <!-- category item -->
      <li
        v-for="item in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
