<template>
  <router-view v-slot="{ Component, route }">
    <KeepAlive :include="keepAliveNames">
      <component :is="Component" v-if="!tagStore.reloading" :key="route.fullPath" />
    </KeepAlive>
  </router-view>
</template>

<script setup>
import { useTagsStore } from '@/store'
const tagStore = useTagsStore()

const keepAliveNames = computed(() => {
  return tagStore.tags.filter((item) => item.keepAlive).map((item) => item.name)
})
</script>
