<template>
  <div class="tags-wrapper" :style="{ height: useTheme.tags.height + 'px' }">
    <n-space>
      <n-tag
        v-for="tag in tagsStore.tags"
        :key="tag.path"
        :type="tagsStore.activeTag === tag.path ? 'primary' : 'default'"
        :closable="tagsStore.tags.length > 1"
        @click="handleTagClick(tag.path)"
        @close.stop="tagsStore.removeTag(tag.path)"
        @contextmenu.prevent="handleContextMenu($event, tag)"
      >
        {{ tag.title }}
      </n-tag>
    </n-space>
  </div>
  <ContextMenu
    v-model:show="contextMenuOption.show"
    :current-path="contextMenuOption.currentPath"
    :x="contextMenuOption.x"
    :y="contextMenuOption.y"
  />
</template>

<script setup name="Tags">
import ContextMenu from './ContextMenu.vue'
import { nextTick, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTagsStore } from '@/store/modules/tags'
import { useThemeStore } from '@/store/modules/theme'

const route = useRoute()
const router = useRouter()
const tagsStore = useTagsStore()
const useTheme = useThemeStore()

const contextMenuOption = reactive({
  show: false,
  x: 0,
  y: 0,
  currentPath: '',
})

watch(
  () => route.path,
  () => {
    const { name, path } = route
    const title = route.meta?.title
    tagsStore.addTag({ name, path, title })
  },
  { immediate: true }
)

const handleTagClick = (path) => {
  tagsStore.setActiveTag(path)
  router.push(path)
}

function showContextMenu() {
  contextMenuOption.show = true
}
function hideContextMenu() {
  contextMenuOption.show = false
}
function setContextMenu(x, y, currentPath) {
  Object.assign(contextMenuOption, { x, y, currentPath })
}

// 右击菜单
async function handleContextMenu(e, tagItem) {
  const { clientX, clientY } = e
  hideContextMenu()
  setContextMenu(clientX, clientY, tagItem.path)
  await nextTick()
  showContextMenu()
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
