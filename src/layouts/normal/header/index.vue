<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/16 18:52:48
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <AppCard class="flex items-center px-12" border-b="1px solid light_border dark:dark_border">
    <MenuCollapse />

    <AppTab class="w-0 flex-1 px-12" />

    <span class="mx-6 opacity-20">|</span>

    <div class="flex flex-shrink-0 items-center px-12 text-18">
      <i
        class="mr-16 cursor-pointer"
        :class="isDark ? 'i-fe:moon' : 'i-fe:sun'"
        @click="toggleDark"
      />
      <i
        class="mr-16 cursor-pointer"
        :class="isFullscreen ? 'i-fe:minimize' : 'i-fe:maximize'"
        @click="toggle"
      />

      <i
        class="i-fe:github mr-16 cursor-pointer"
        @click="handleLinkClick('https://github.com/zclzone/vue-naive-admin/tree/2.x')"
      />
      <i
        class="i-me:gitee mr-16 cursor-pointer"
        @click="handleLinkClick('https://gitee.com/isme-admin/vue-naive-admin/tree/2.x')"
      />
      <UserAvatar />
    </div>
  </AppCard>
</template>

<script setup>
import { UserAvatar, MenuCollapse, AppTab } from '@/layouts/components'
import { useDark, useToggle, useFullscreen } from '@vueuse/core'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const isDark = useDark()
const toggleDark = () => {
  appStore.toggleDark()
  useToggle(isDark)()
}

const { isFullscreen, toggle } = useFullscreen()

function handleLinkClick(link) {
  window.open(link)
}
</script>
