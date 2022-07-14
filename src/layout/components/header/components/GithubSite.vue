<template>
  <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
    <icon-mdi:github />
  </n-icon>
</template>

<script setup>
function handleLinkClick() {
  window.open('https://github.com/zclzone/vue-naive-admin')
}
</script>
