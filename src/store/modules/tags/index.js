import { defineStore } from 'pinia'
import { activeTag, tags, WITHOUT_TAG_PATHS } from './helpers'
import { router } from '@/router'
import { sStorage } from '@/utils'

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: tags || [],
      activeTag: activeTag || '',
      reloading: false,
    }
  },
  getters: {
    activeIndex() {
      return this.tags.findIndex((item) => item.path === this.activeTag)
    },
  },
  actions: {
    setActiveTag(path) {
      this.activeTag = path
      sStorage.set('activeTag', path)
    },
    setTags(tags) {
      this.tags = tags
      sStorage.set('tags', tags)
    },
    addTag(tag = {}) {
      if (WITHOUT_TAG_PATHS.includes(tag.path)) return
      let findItem = this.tags.find((item) => item.path === tag.path)
      if (findItem) findItem = tag
      else this.setTags([...this.tags, tag])
      this.setActiveTag(tag.path)
    },
    async reloadTag(path, keepAlive) {
      const findItem = this.tags.find((item) => item.path === path)
      // 更新key可让keepAlive失效
      if (findItem && keepAlive) findItem.keepAlive = false

      $loadingBar.start()
      this.reloading = true
      await nextTick()
      this.reloading = false
      findItem.keepAlive = keepAlive
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
        $loadingBar.finish()
      }, 100)
    },
    removeTag(path) {
      this.setTags(this.tags.filter((tag) => tag.path !== path))
      if (path === this.activeTag) {
        router.push(this.tags[this.tags.length - 1].path)
      }
    },
    removeOther(curPath = this.activeTag) {
      this.setTags(this.tags.filter((tag) => tag.path === curPath))
      if (curPath !== this.activeTag) {
        router.push(this.tags[this.tags.length - 1].path)
      }
    },
    removeLeft(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((item, index) => index >= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    removeRight(curPath) {
      const curIndex = this.tags.findIndex((item) => item.path === curPath)
      const filterTags = this.tags.filter((item, index) => index <= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.path === this.activeTag)) {
        router.push(filterTags[filterTags.length - 1].path)
      }
    },
    resetTags() {
      this.setTags([])
      this.setActiveTag('')
    },
  },
})
