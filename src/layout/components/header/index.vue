<script setup>
import BreadCrumb from './BreadCrumb.vue'
import HeaderAction from './HeaderAction.vue'
</script>

<template>
  <header class="header">
    <bread-crumb />
    <header-action />
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 35px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
