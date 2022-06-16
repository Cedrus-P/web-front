<script setup>
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}
getCategoryData()
</script>
<template>
  <div class="demo-container">我是移动端下navigation</div>
</template>
<style lang="scss" scoped></style>
