import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state() {
    return {
      tag: {
        visible: true,
        height: 50,
      },
    }
  },
  actions: {
    setTabVisible(visible) {
      this.tag.visible = visible
    },
  },
})
