<template>
  <n-config-provider :theme-overrides="useTheme.naiveThemeOverrides">
    <n-loading-bar-provider>
      <LoadingBar />
      <n-dialog-provider>
        <DialogContent />
        <n-message-provider>
          <MessageContent />
          <n-notification-provider>
            <NotificationContent />
            <slot></slot>
          </n-notification-provider>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import LoadingBar from './LoadingBar.vue'
import { useThemeStore } from '@/store/modules/theme'
import NotificationContent from './NotificationContent.vue'

const useTheme = useThemeStore()
</script>
