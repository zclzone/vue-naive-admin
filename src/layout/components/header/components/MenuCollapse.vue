<template>
  <n-icon size="20" style="cursor: pointer" @click="appStore.switchCollapsed">
    <IconMenuExpand v-if="appStore.collapsed" />
    <IconMenuCollapse v-else />
  </n-icon>
</template>

<script setup>
import { IconMenuCollapse, IconMenuExpand } from '@/components/AppIcons'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>
