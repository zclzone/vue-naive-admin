<template>
  <ScrollX ref="scrollX" :height="useTheme.tags.height">
    <n-tag
      v-for="tag in tagsStore.tags"
      :key="tag.path"
      :type="tagsStore.activeTag === tag.path ? 'primary' : 'default'"
      :closable="tagsStore.tags.length > 1"
      @click="handleTagClick(tag.path)"
      @close.stop="tagsStore.removeTag(tag.path)"
      @contextmenu.prevent="handleContextMenu($event, tag)">
      {{ tag.title }}
    </n-tag>
  </ScrollX>

  <ContextMenu
    v-model:show="contextMenuOption.show"
    :current-path="contextMenuOption.currentPath"
    :x="contextMenuOption.x"
    :y="contextMenuOption.y" />
</template>

<script setup name="Tags">
import ContextMenu from './ContextMenu.vue'
import { useTagsStore } from '@/store/modules/tags'
import { useThemeStore } from '@/store/modules/theme'
import ScrollX from '@/components/common/ScrollX.vue'

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

const scrollX = ref(null)
watch(
  () => tagsStore.tags,
  async (newVal, oldVal) => {
    await nextTick()
    scrollX.value?.refreshIsOverflow(newVal.length > oldVal.length)
  }
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
.n-tag {
  padding: 0 15px;
  margin: 0 5px;
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
      background-color: var(--primaryColor);
    }
  }
  &:hover {
    color: var(--primaryColor);
  }
}
</style>
