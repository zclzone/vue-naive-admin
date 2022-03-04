<script setup>
import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import LoadingBar from './LoadingBar.vue'

import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
</script>

<template>
  <n-config-provider :theme-overrides="appStore.themeOverrides">
    <n-loading-bar-provider>
      <loading-bar />
      <n-dialog-provider>
        <dialog-content />
        <n-message-provider>
          <message-content />
          <slot></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
