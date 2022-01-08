<script setup>
import { NConfigProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider, NDialogProvider } from 'naive-ui'

import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import LoadingBar from './LoadingBar.vue'

import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
</script>

<template>
  <n-config-provider :theme-overrides="appStore.themeOverrides">
    <n-global-style />
    <n-loading-bar-provider>
      <loading-bar />
      <n-dialog-provider>
        <dialog-content />
        <n-message-provider>
          <message-content />
          <slot name="default"></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
