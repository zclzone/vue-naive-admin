<template>
  <n-config-provider :theme-overrides="appStore.themeOverrides">
    <n-loading-bar-provider>
      <LoadingBar />
      <n-dialog-provider>
        <DialogContent />
        <n-message-provider>
          <MessageContent />
          <slot></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import LoadingBar from './LoadingBar.vue'

import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
</script>
