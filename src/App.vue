<script setup>
import AppProvider from '@/components/AppProvider/index.vue'
</script>

<template>
  <router-view>
    <template #default="{ Component, route }">
      <app-provider>
        <keep-alive v-if="route.meta && route.meta.keepAlive">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component :is="Component" v-else :key="route.fullPath" />
      </app-provider>
    </template>
  </router-view>
</template>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
