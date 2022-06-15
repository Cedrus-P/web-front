<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
</script>
<template>
  <mobile-navigation-vue v-if="isMobileTerminal"></mobile-navigation-vue>
</template>
<style lang="scss" scoped></style>
