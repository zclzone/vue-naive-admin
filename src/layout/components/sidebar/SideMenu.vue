<template>
  <n-menu
    class="side-menu"
    accordion
    :indent="12"
    :root-indent="12"
    :options="menuOptions"
    :value="(currentRoute.meta && currentRoute.meta.activeMenu) || currentRoute.name"
    @update:value="handleMenuSelect"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed, h } from 'vue'
import { usePermissionStore } from '@/store/modules/permission'

import { NIcon } from 'naive-ui'
import { ListAlt, CircleRegular } from '@vicons/fa'

import { isExternal } from '@/utils/is'

const router = useRouter()
const permissionStore = usePermissionStore()
const { currentRoute } = router

const menuOptions = computed(() => {
  return generateOptions(permissionStore.routes, '')
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

function renderIcon(icon, props = { size: 12 }) {
  return () => h(NIcon, { ...props }, { default: () => h(icon) })
}

function isSingleRoute(route) {
  let isSingle = true
  let curRoute = route
  while (curRoute.children && curRoute.children.length) {
    if (curRoute.children.length > 1) {
      isSingle = false
      break
    }
    if (curRoute.children.length === 1) {
      curRoute = curRoute.children[0]
    }
  }
  return isSingle
}

function generateOptions(routes, basePath) {
  let options = []
  routes.forEach((route) => {
    if (route.name && !route.isHidden) {
      let curOption = {
        label: (route.meta && route.meta.title) || route.name,
        key: route.name,
        path: resolvePath(basePath, route.path),
      }
      if (route.children && route.children.length) {
        curOption.icon = renderIcon(route.meta?.icon || ListAlt, { size: 16 })
        curOption.children = generateOptions(route.children, resolvePath(basePath, route.path))
      } else {
        curOption.icon = (route.meta?.icon && renderIcon(route.meta?.icon)) || renderIcon(CircleRegular, { size: 8 })
      }
      options.push(curOption)
    }
  })
  return options
}

function handleMenuSelect(key, item) {
  if (isExternal(item.path)) {
    window.open(item.path)
  } else {
    router.push(item.path)
  }

  // 通过path重定向
  // router.push({
  //   path: '/redirect',
  //   query: { redirect: item.path },
  // })
}
</script>

<style lang="scss">
.n-menu {
  margin-top: 10px;
  padding-left: 10px;
  .n-menu-item-content {
    &::before {
      left: 0;
      right: 0;
      border-radius: 0;
      background-color: unset !important;
    }
    &:hover,
    &.n-menu-item-content--selected {
      border-radius: 0 !important;

      &::before {
        border-right: 3px solid $primaryColor;
        background-color: #16243a;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba($primaryColor, 0.3) 100%);
      }
    }
  }

  .n-menu-item-content-header {
    font-size: 14px;
    font-weight: bold;
  }

  .n-submenu-children {
    .n-menu-item-content-header {
      font-size: 14px;
      font-weight: normal;
      position: relative;
      overflow: visible !important;
    }
  }
}
</style>
