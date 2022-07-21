<template>
  <n-layout has-sider h-full>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
      :collapsed="appStore.collapsed"
    >
      <SideBar />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bg-white border-b bc-eee :style="`height: ${useTheme.header.height ?? 60}px`">
        <AppHeader />
      </n-layout-header>

      <n-layout bg="#f5f6fb" :style="`height: calc(100% - ${useTheme.header.height ?? 60}px)`">
        <AppTags v-if="useTheme.tags.visible" />
        <AppMain
          class="cus-scroll border-t bc-eee"
          :style="{
            height: `calc(100% - ${useTheme.tags.visible ? useTheme.tags.height ?? 50 : 0}px)`,
            overflow: 'auto',
          }"
        />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import AppHeader from './components/header/index.vue'
import SideBar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import AppTags from './components/tags/index.vue'
import { useThemeStore } from '@/store/modules/theme'
import { useAppStore } from '@/store/modules/app'

const useTheme = useThemeStore()
const appStore = useAppStore()
</script>
