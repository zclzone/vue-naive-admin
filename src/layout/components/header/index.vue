<template>
  <header class="header">
    <div class="h-left">
      <MenuCollapse />
      <BreadCrumb ml-15 />
    </div>
    <div class="h-right">
      <GithubSite />
      <FullScreen />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup>
import BreadCrumb from './components/BreadCrumb.vue'
import MenuCollapse from './components/MenuCollapse.vue'
import FullScreen from './components/FullScreen.vue'
import UserAvatar from './components/UserAvatar.vue'
import GithubSite from './components/GithubSite.vue'
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
  .h-right {
    display: flex;
    align-items: center;
  }
}
</style>
