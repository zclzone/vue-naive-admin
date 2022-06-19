<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in route.matched" :key="item.path" @click="handleBreadClick(item.path)">
      {{ item.meta.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

function handleBreadClick(path) {
  if (path === route.path) return
  router.push(path)
}
</script>
