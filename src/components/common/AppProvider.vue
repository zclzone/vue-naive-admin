<template>
  <n-config-provider :theme-overrides="themStore.naiveThemeOverrides">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { useLoadingBar, useDialog, useMessage, useNotification } from 'naive-ui'

import { useCssVar } from '@vueuse/core'
import { useThemeStore } from '@/store/modules/theme'
import { setupMessage, setupDialog } from '@/utils/common/naiveTools'

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

// 挂载naive组件的方法至window, 以便在全局使用
function setupNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$notification = useNotification()

  window.$message = setupMessage(useMessage())
  window.$dialog = setupDialog(useDialog())
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools()
  },
  render() {
    return h('div')
  },
})
</script>
