<template>
  <n-menu
    class="side-menu"
    accordion
    :indent="18"
    :collapsed-icon-size="22"
    :collapsed-width="64"
    :options="menuOptions"
    :value="(currentRoute.meta && currentRoute.meta.activeMenu) || currentRoute.name"
    @update:value="handleMenuSelect" />
</template>

<script setup>
import { usePermissionStore } from '@/store/modules/permission'

import { isExternal } from '@/utils/is'
import { useAppStore } from '@/store/modules/app'
import { renderIcon } from '@/utils/icon'

const router = useRouter()
const permissionStore = usePermissionStore()
const appStore = useAppStore()
const { currentRoute } = router

const menuOptions = computed(() => {
  return permissionStore.menus.map((item) => getMenuItem(item)).sort((a, b) => a.index - b.index)
})

function resolvePath(basePath, path) {
  if (isExternal(path)) return path
  return (
    '/' +
    [basePath, path]
      .filter((path) => !!path && path !== '/')
      .map((path) => path.replace(/(^\/)|(\/$)/g, ''))
      .join('/')
  )
}

function getMenuItem(route, basePath = '') {
  let menuItem = {
    label: (route.meta && route.meta.title) || route.name,
    key: route.name,
    path: resolvePath(basePath, route.path),
    icon: route.meta?.icon ? renderIcon(route.meta?.icon, { size: 16 }) : renderIcon('mdi:circle-outline', { size: 8 }),
    index: route.meta?.index || 0,
  }

  const visibleChildren = route.children ? route.children.filter((item) => item.name && !item.isHidden) : []

  if (!visibleChildren.length) return menuItem

  if (visibleChildren.length === 1) {
    // 单个子路由处理
    const singleRoute = visibleChildren[0]
    menuItem = {
      label: singleRoute.meta?.title || singleRoute.name,
      key: singleRoute.name,
      path: resolvePath(menuItem.path, singleRoute.path),
      icon: singleRoute.meta?.icon
        ? renderIcon(singleRoute.meta?.icon, { size: 16 })
        : renderIcon('mdi:circle-outline', { size: 8 }),
      index: menuItem.index,
    }
    const visibleItems = singleRoute.children ? singleRoute.children.filter((item) => item.name && !item.isHidden) : []

    if (visibleItems.length === 1) {
      menuItem = getMenuItem(visibleItems[0], menuItem.path)
    } else if (visibleItems.length > 1) {
      menuItem.children = visibleItems.map((item) => getMenuItem(item, menuItem.path)).sort((a, b) => a.index - b.index)
    }
  } else {
    menuItem.children = visibleChildren
      .map((item) => getMenuItem(item, menuItem.path))
      .sort((a, b) => a.index - b.index)
  }

  return menuItem
}

function handleMenuSelect(key, item) {
  if (isExternal(item.path)) {
    window.open(item.path)
  } else {
    if (item.path === currentRoute.value.path && !currentRoute.value.meta?.keepAlive) {
      appStore.reloadPage()
    } else {
      router.push(item.path)
    }
  }
}
</script>

<style lang="scss">
.side-menu:not(.n-menu--collapsed) {
  .n-menu-item-content {
    &::before {
      left: 5px;
      right: 5px;
    }
    &.n-menu-item-content--selected,
    &:hover {
      &::before {
        border-left: 4px solid var(--primaryColor);
      }
    }
  }
}
</style>
