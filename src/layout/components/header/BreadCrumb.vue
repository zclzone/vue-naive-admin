<script setup>
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()
const { currentRoute } = router

function handleBreadClick(path) {
  if (path === currentRoute.value.path) return
  router.push(path)
}
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in currentRoute.matched" :key="item.path" @click="handleBreadClick(item.path)">
      {{ item.meta.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
