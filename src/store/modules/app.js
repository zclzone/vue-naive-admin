/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:25:31
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { defaultLayout, naiveThemeOverrides } from '@/settings'

export const useAppStore = defineStore('app', {
  state: () => ({
    collapsed: false,
    isDark: useDark(),
    layout: defaultLayout,
    naiveThemeOverrides,
  }),
  actions: {
    switchCollapsed() {
      this.collapsed = !this.collapsed
    },
    setCollapsed(b) {
      this.collapsed = b
    },
    toggleDark() {
      this.isDark = !this.isDark
    },
    setLayout(v) {
      this.layout = v
    },
  },
  persist: {
    paths: ['collapsed', 'naiveThemeOverrides'],
    storage: sessionStorage,
  },
})
