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
    class="w-full h-6 flex items-center dark:bg-slate-800 dark:border-b-slate-700 bg-white border-b border-b-zinc-100 px-2 py-1"
  >
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center">
        <img
          src="@/assets/common/img/hina.png"
          class="h-4 cursor-pointer ml-1 mr-1"
          @click="onToHome"
        />
        <header-search-vue
          class="mr-1 w-[20vw] min-w-[250px] duration-200"
        ></header-search-vue>
      </div>
      <div class="flex items-center">
        <header-theme-vue class="mr-1"></header-theme-vue>
        <header-my-vue></header-my-vue>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
