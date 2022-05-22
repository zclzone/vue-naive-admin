<template>
  <n-icon mr20 size="18" style="cursor: pointer" @click="handleLinkClick">
    <IconGithub />
  </n-icon>
</template>

<script setup>
import { IconGithub } from '@/components/AppIcons'
function handleLinkClick() {
  window.open('https://github.com/zclzone/vue-naive-admin')
}
</script>

<style lang="scss" scoped></style>
