import { defineStore } from 'pinia'
import { tagsSS, activeTag, tags } from './helpers'

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: tags || [],
      activeTag: activeTag || '',
    }
  },
  actions: {
    setActiveTag(path) {
      this.activeTag = path
      tagsSS.set('activeTag', path)
    },
    addTag(tag = {}) {
      if (this.tags.some((item) => item.path === tag.path)) return
      this.tags.push(tag)
      tagsSS.set('tags', this.tags)
    },
    removeTag(path) {
      this.tags = this.tags.filter((tag) => tag.path !== path)
      tagsSS.set('tags', this.tags)
    },
  },
})
