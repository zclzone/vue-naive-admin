import { defineStore } from 'pinia'
import { tagsSS, activeTag, tags, WITHOUT_TAG_PATHS } from './helpers'

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
      if (WITHOUT_TAG_PATHS.includes(tag.path) || this.tags.some((item) => item.path === tag.path)) return
      this.tags.push(tag)
      tagsSS.set('tags', this.tags)
    },
    removeTag(path) {
      this.tags = this.tags.filter((tag) => tag.path !== path)
      tagsSS.set('tags', this.tags)
    },
  },
})
