<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in route.matched" :key="item.path" @click="handleBreadClick(item.path)">
      <component :is="renderIcon(item.meta?.icon, { size: 16 })" v-if="item.meta?.icon" />
      {{ item.meta.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { renderIcon } from '@/utils/icon'

const router = useRouter()
const route = useRoute()

function handleBreadClick(path) {
  if (path === route.path) return
  router.push(path)
}
</script>
