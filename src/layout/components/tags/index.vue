<template>
  <div class="tags-wrapper" :style="{ height: useTheme.tag.height + 'px' }">
    <n-space>
      <n-tag
        v-for="tag in useTag.tags"
        :key="tag.path"
        :type="useTag.activeTag === tag.path ? 'primary' : 'default'"
        :closable="useTag.tags.length > 1"
        @click="handleTagClick(tag.path)"
        @close.stop="handleClose(tag.path)"
      >
        {{ tag.title }}
      </n-tag>
    </n-space>
  </div>
</template>

<script setup name="Tags">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTagStore } from '@/store/modules/tag'
import { useThemeStore } from '@/store/modules/theme'

const route = useRoute()
const router = useRouter()
const useTag = useTagStore()
const useTheme = useThemeStore()

watch(
  () => route.path,
  () => {
    const { name, path } = route
    const title = route.meta?.title
    useTag.addTag({ name, path, title })
    useTag.setActiveTag(path)
  },
  { immediate: true }
)

const handleTagClick = (path) => {
  useTag.setActiveTag(path)
  router.push(path)
}

const handleClose = (path) => {
  if (path === useTag.activeTag) {
    const activeIndex = useTag.tags.findIndex((item) => item.path === path)
    if (activeIndex > 0) {
      router.push(useTag.tags[activeIndex - 1].path)
    } else {
      router.push(useTag.tags[activeIndex + 1].path)
    }
  }
  useTag.removeTag(path)
}
</script>

<style lang="scss">
.tags-wrapper {
  display: flex;
  align-items: center;
  background-color: #f5f6fb;
  padding: 0 10px;
  position: sticky;
  top: 0;
  z-index: 9;
  .n-tag {
    padding: 0 15px;
    cursor: pointer;
    .n-tag__close {
      margin-left: 5px;
      box-sizing: content-box;
      font-size: 12px;
      padding: 2px;
      border-radius: 50%;
      transition: all 0.7s;
      &:hover {
        color: #fff;
        background-color: $primaryColor;
      }
    }
    &:hover {
      color: $primaryColor;
    }
  }
}
</style>
