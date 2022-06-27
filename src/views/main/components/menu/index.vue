<script setup>
defineEmits(['onItemClick'])
</script>
<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-800 dark:text-slate-300 font-bold mb-2 px-1">
      所有分类
    </h2>
    <ul class="overflow-y-scroll">
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        @click="$emit('onItemClick', index)"
        class="text-lg text-zinc-800 dark:text-slate-300 active:dark:bg-slate-800 px-1 py-1.5 duration-100 active:bg-zinc-100"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>
