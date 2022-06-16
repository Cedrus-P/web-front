<script setup>
import { getCatgory } from '@/api/category'

const getCatgoryData = async () => {
  const res = await getCatgory()
  console.log(res)
}
getCatgoryData()
</script>
<template>
  <div class="demo-container">我是移动端下navigation</div>
</template>
<style lang="scss" scoped></style>
