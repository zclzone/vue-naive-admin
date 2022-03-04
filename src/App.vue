<script setup>
import AppProvider from '@/components/AppProvider/index.vue'
</script>

<template>
  <app-provider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </app-provider>
</template>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
