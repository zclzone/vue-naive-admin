import { defineStore } from 'pinia'

export const useTagStore = defineStore('tag', {
  state() {
    return {
      tags: [],
      activeTag: '',
    }
  },
  actions: {
    setActiveTag(path) {
      this.activeTag = path
    },
    addTag(tag = {}) {
      if (this.tags.some((item) => item.path === tag.path)) return
      this.tags.push(tag)
    },
    removeTag(path) {
      this.tags = this.tags.filter((tag) => tag.path !== path)
    },
  },
})
