<template>
  <n-icon size="20" cursor-pointer @click="appStore.switchCollapsed">
    <icon-mdi:format-indent-increase v-if="appStore.collapsed" />
    <icon-mdi:format-indent-decrease v-else />
  </n-icon>
</template>

<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>
