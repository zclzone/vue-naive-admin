import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      reloadFlag: true,
      collapsed: false,
      /** keepAlive路由的key，重新赋值可重置keepAlive */
      aliveKeys: {},
      darkMode: false,
    }
  },
  actions: {
    async reloadPage() {
      $loadingBar.start()
      this.reloadFlag = false
      await nextTick()
      this.reloadFlag = true

      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
        $loadingBar.finish()
      }, 100)
    },
    switchCollapsed() {
      this.collapsed = !this.collapsed
    },
    setCollapsed(collapsed) {
      this.collapsed = collapsed
    },
    setAliveKeys(key, val) {
      this.aliveKeys[key] = val
    },
    /** 设置暗黑模式 */
    setDarkMode(darkMode) {
      this.darkMode = darkMode
    },
    /** 切换/关闭 暗黑模式 */
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})
