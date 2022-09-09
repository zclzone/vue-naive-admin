<template>
  <router-view v-slot="{ Component, route }">
    <KeepAlive :include="keepAliveRouteNames">
      <component :is="Component" v-if="appStore.reloadFlag" :key="route.meta?.key || route.fullPath" />
    </KeepAlive>
  </router-view>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app'
import { useRouter } from 'vue-router'
const appStore = useAppStore()
const router = useRouter()

const allRoutes = router.getRoutes()
const keepAliveRouteNames = computed(() => {
  return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name)
})
</script>
