<script setup>
import { useAppStore } from '@/store'
import { useDark, useToggle } from '@vueuse/core'

const appStore = useAppStore()
const isDark = useDark()
const toggleDark = () => {
  appStore.toggleDark()
  useToggle(isDark)()
}
</script>

<template>
  <n-icon mr-20 cursor-pointer size="18" @click="toggleDark">
    <icon-mdi-moon-waning-crescent v-if="isDark" />
    <icon-mdi-white-balance-sunny v-else />
  </n-icon>
</template>
