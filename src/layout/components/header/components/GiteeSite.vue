<template>
  <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
    <icon-simple-icons:gitee />
  </n-icon>
</template>

<script setup>
function handleLinkClick() {
  window.open('https://gitee.com/isme-admin/vue-naive-admin')
}
</script>
