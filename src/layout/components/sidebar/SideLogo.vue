<template>
  <router-link to="/" class="logo">
    <n-icon size="36" color="#316c72">
      <IconLogo />
    </n-icon>
    <n-gradient-text v-show="!appStore.collapsed" type="primary">{{ title }}</n-gradient-text>
  </router-link>
</template>

<script setup>
import { IconLogo } from '@/components/AppIcons'
import { useAppStore } from '@/store/modules/app'
const title = import.meta.env.VITE_APP_TITLE

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.logo {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  .n-gradient-text {
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
    max-width: 140px;
    flex-shrink: 0;
    white-space: normal;
  }
}
</style>
