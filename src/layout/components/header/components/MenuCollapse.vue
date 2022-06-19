<template>
  <n-icon size="20" style="cursor: pointer" @click="appStore.switchCollapsed">
    <icon-mdi:format-indent-increase v-if="appStore.collapsed" />
    <icon-mdi:format-indent-decrease v-else />
  </n-icon>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>
