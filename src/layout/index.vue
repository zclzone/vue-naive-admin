<template>
  <n-layout has-sider wh-full>
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

    <article flex-1 flex-col overflow-hidden>
      <header
        class="bg-white px-15 border-b bc-eee flex items-center"
        dark="bg-dark border-0"
        :style="`height: ${header.height}px`"
      >
        <AppHeader />
      </header>
      <section v-if="tags.visible" border-b bc-eee dark:border-0 hidden sm:block>
        <AppTags :style="{ height: `${tags.height}px` }" />
      </section>
      <section flex-1 overflow-hidden bg-hex-f5f6fb dark:bg-hex-101014>
        <AppMain />
      </section>
    </article>
  </n-layout>
</template>

<script setup>
import AppHeader from './components/header/index.vue'
import SideBar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import AppTags from './components/tags/index.vue'
import { useAppStore } from '@/store'
import { header, tags } from '~/settings'

const appStore = useAppStore()
</script>
