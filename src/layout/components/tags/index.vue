<template>
  <div ref="tagsWrapper" class="tags-wrapper" @mousewheel.prevent="handleMouseWheel">
    <div
      ref="tagsContent"
      class="tags-content"
      :style="{ height: useTheme.tags.height + 'px', transform: `translateX(${translateX}px)` }"
      :wrap="false"
    >
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
    </div>
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
import { nextTick, reactive, ref, watch } from 'vue'
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
let translateX = ref(0)
const tagsContent = ref()
const tagsWrapper = ref()

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

function handleMouseWheel(e) {
  let { wheelDelta } = e
  const tagsWrapperWidth = tagsWrapper.value.offsetWidth
  const tagsContentWidth = tagsContent.value.offsetWidth
  /**
   * @wheelDelta 平行滚动的值 >0： 右移  <0: 左移
   * @translateX 内容translateX的值
   * @tagsWrapperWidth 容器的宽度
   * @tagsContentWidth 内容的宽度
   */

  // 向右移动时时，如果无偏移或者向左偏移，则不处理
  if (wheelDelta > 0 && translateX.value >= 0) {
    return
  }

  // 向左移动时，如果内容的宽度小于向左偏移的宽度+容器的宽度，则不处理
  if (wheelDelta < 0 && tagsWrapperWidth > tagsContentWidth + translateX.value) {
    return
  }

  if (wheelDelta > 0 && wheelDelta + translateX.value > 0) {
    wheelDelta = -translateX.value
  }

  if (wheelDelta < 0 && -wheelDelta > tagsWrapperWidth - (tagsContentWidth + translateX.value)) {
    wheelDelta = tagsWrapperWidth - (tagsContentWidth + translateX.value)
  }

  translateX.value += wheelDelta
}
</script>

<style lang="scss">
.tags-wrapper {
  display: flex;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9;
  overflow: hidden;
  .tags-content {
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    transition: transform 0.3s;
  }
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
        background-color: $primaryColor;
      }
    }
    &:hover {
      color: $primaryColor;
    }
  }
}
</style>
