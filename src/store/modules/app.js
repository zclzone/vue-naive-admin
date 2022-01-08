import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state() {
    return {
      themeOverrides: {
        common: {
          primaryColor: '#316c72',
          primaryColorSuppl: '#316c72',
          primaryColorHover: '#316c72',
          successColorHover: '#316c72',
          successColorSuppl: '#316c72',
        },
      },
    }
  },
})
