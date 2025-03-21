<script setup>
import { onMounted } from 'vue';
import { getCategory } from './api/testAPI';
onMounted(async () => {
  const res = await getCategory();
  console.log(res);
});
</script>

<template>
  <p>主页</p>
</template>

<style scoped>

</style>
