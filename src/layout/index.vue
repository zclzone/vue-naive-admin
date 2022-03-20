<script setup>
import AppHeader from './components/header/index.vue'
import SideMenu from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div class="layout">
    <n-layout has-sider position="absolute">
      <n-layout-sider :width="200" :collapsed-width="0" :native-scrollbar="false">
        <side-menu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <app-header />
        </n-layout-header>
        <n-layout
          position="absolute"
          content-style="height: 100%;"
          style="top: 60px; background-color: #f5f6fb"
          :native-scrollbar="false"
        >
          <app-main />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<style lang="scss" scoped>
.n-layout-header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
