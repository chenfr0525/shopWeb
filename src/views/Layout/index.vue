<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>
