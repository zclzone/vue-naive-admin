<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<template>
  <n-icon mr-20 cursor-pointer size="18" @click="appStore.toggleDarkMode">
    <icon-mdi-moon-waning-crescent v-if="appStore.darkMode" />
    <icon-mdi-white-balance-sunny v-else />
  </n-icon>
</template>
