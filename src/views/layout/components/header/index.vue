<script setup>
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue'
import { useRouter } from 'vue-router'

// router === this.$router
const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
<template>
  <div
    class="w-full flex items-center bg-white border-b border-b-zinc-100 px-2 py-1"
  >
    <div class="w-full flex items-center justify-between">
      <img
        src="@/assets/common/img/hina.png"
        class="h-4 cursor-pointer mr-2"
        @click="onToHome"
      />
      <header-search-vue class="mr-1"></header-search-vue>
      <header-theme-vue class="mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
