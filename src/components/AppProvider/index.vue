<template>
  <n-config-provider :theme-overrides="themStore.naiveThemeOverrides">
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
import { useCssVar } from '@vueuse/core'
import MessageContent from './MessageContent.vue'
import DialogContent from './DialogContent.vue'
import LoadingBar from './LoadingBar.vue'
import NotificationContent from './NotificationContent.vue'
import { useThemeStore } from '@/store/modules/theme'

const themStore = useThemeStore()
watch(
  () => themStore.naiveThemeOverrides.common,
  (vars) => {
    for (const key in vars) {
      useCssVar(`--${key}`, document.documentElement).value = vars[key]
      if (key === 'primaryColor') {
        window.localStorage.setItem('__THEME_COLOR__', vars[key])
      }
    }
  },
  { immediate: true }
)
</script>
