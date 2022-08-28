<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" v-if="appStore.reloadFlag" />
  </router-view>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
</script>
