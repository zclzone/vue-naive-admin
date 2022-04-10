<template>
  <div class="layout">
    <n-layout has-sider position="absolute">
      <n-layout-sider bordered :width="200" :collapsed-width="0" :native-scrollbar="false">
        <SideBar />
      </n-layout-sider>
      <n-layout>
        <n-layout-header :style="{ height: useTheme.header.height + 'px' }" style="border-left: none">
          <AppHeader />
        </n-layout-header>

        <n-layout
          position="absolute"
          style="background-color: #f5f6fb"
          :style="{ top: useTheme.header.height + 'px' }"
          :native-scrollbar="false"
        >
          <AppTags v-if="useTheme.tags.visible" />
          <AppMain />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup>
import AppHeader from './components/header/index.vue'
import SideBar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import AppTags from './components/tags/index.vue'
import { useThemeStore } from '@/store/modules/theme'

const useTheme = useThemeStore()
</script>

<style lang="scss" scoped>
.n-layout-header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
