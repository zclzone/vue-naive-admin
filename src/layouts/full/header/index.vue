<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/16 18:51:10
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <AppCard class="flex items-center px-12" border-b="1px solid light_border dark:dark_border">
    <n-popover width="trigger" class="align-center w-500px flex" placement="top-start">
      <template #trigger>
        <n-button>
          <i class="i-simple-icons:juejin text-#1E80FF" />
        </n-button>
      </template>
      <n-flex>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
        <n-button>找点乐子吧</n-button>
      </n-flex>
      <div class="items-right ml-auto flex flex-shrink-0 px-12 text-18">
        <n-input-group>
          <n-button type="primary">
            搜索
          </n-button>
          <n-input :style="{ width: '50%' }">
            <template #count />
          </n-input>
          <n-button type="primary" ghost>
            搜索
          </n-button>
        </n-input-group>
      </div>
    </n-popover>
    <MenuCollapse />
    <BreadCrumb />

    <div class="ml-auto flex flex-shrink-0 items-center px-12 text-18">
      <BeginnerGuide />

      <ToggleTheme />

      <Fullscreen />

      <i
        class="i-fe:github mr-16 cursor-pointer"
        @click="handleLinkClick('https://github.com/cike-projects/vue-naive-admin')"
      />

      <ThemeSetting class="mr-16" />

      <UserAvatar />
    </div>
  </AppCard>
</template>

<script setup>
import { ToggleTheme } from '@/components'
import { BeginnerGuide, BreadCrumb, Fullscreen, MenuCollapse, UserAvatar } from '@/layouts/components'

function handleLinkClick(link) {
  window.open(link)
}
</script>
