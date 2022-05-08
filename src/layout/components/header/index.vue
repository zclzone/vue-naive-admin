<template>
  <header class="header">
    <div class="h-left">
      <n-icon size="20" style="cursor: pointer" @click="appStore.switchCollapsed">
        <IconMenuExpand v-if="appStore.collapsed" />
        <IconMenuCollapse v-else />
      </n-icon>
      <BreadCrumb ml-15 />
    </div>

    <HeaderAction />
  </header>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app'
import BreadCrumb from './BreadCrumb.vue'
import HeaderAction from './HeaderAction.vue'
import { IconMenuCollapse, IconMenuExpand } from '@/components/AppIcons'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.header {
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .h-left {
    display: flex;
    align-items: center;
  }
}
</style>
