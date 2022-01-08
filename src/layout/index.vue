<script setup>
import { NLayout, NLayoutHeader, NLayoutSider } from 'naive-ui'

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
        <n-layout-header style="height: 100px; background-color: #f5f6fb">
          <app-header />
        </n-layout-header>
        <n-layout
          position="absolute"
          content-style="padding: 0 35px 35px"
          style="top: 100px; background-color: #f5f6fb"
          :native-scrollbar="false"
        >
          <app-main />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>
