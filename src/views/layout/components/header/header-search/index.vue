<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import mSearch from '@/libs/search/index.vue'

const inputValue = ref('')
</script>
