<template>
  <div class="tags-wrapper" :style="{ height: useTheme.tags.height + 'px' }">
    <n-space>
      <n-tag
        v-for="tag in useTags.tags"
        :key="tag.path"
        :type="useTags.activeTag === tag.path ? 'primary' : 'default'"
        :closable="useTags.tags.length > 1"
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
import { useTagsStore } from '@/store/modules/tags'
import { useThemeStore } from '@/store/modules/theme'

const route = useRoute()
const router = useRouter()
const useTags = useTagsStore()
const useTheme = useThemeStore()

watch(
  () => route.path,
  () => {
    const { name, path } = route
    const title = route.meta?.title
    useTags.addTag({ name, path, title })
    useTags.setActiveTag(path)
  },
  { immediate: true }
)

const handleTagClick = (path) => {
  useTags.setActiveTag(path)
  router.push(path)
}

const handleClose = (path) => {
  if (path === useTags.activeTag) {
    const activeIndex = useTags.tags.findIndex((item) => item.path === path)
    if (activeIndex > 0) {
      router.push(useTags.tags[activeIndex - 1].path)
    } else {
      router.push(useTags.tags[activeIndex + 1].path)
    }
  }
  useTags.removeTag(path)
}
</script>

<style lang="scss">
.tags-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff;
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
