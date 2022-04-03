<template>
  <header class="header">
    <BreadCrumb />
    <HeaderAction />
  </header>
</template>

<script setup>
import BreadCrumb from './BreadCrumb.vue'
import HeaderAction from './HeaderAction.vue'
</script>

<style lang="scss" scoped>
.header {
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
