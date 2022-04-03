<template>
  <div class="logo">
    <n-icon size="36" color="#316c72">
      <LastfmSquare />
    </n-icon>
    <router-link to="/">
      <n-gradient-text type="primary">{{ title }}</n-gradient-text>
    </router-link>
  </div>
</template>

<script setup>
import { LastfmSquare } from '@vicons/fa'
const title = import.meta.env.VITE_APP_TITLE
</script>

<style lang="scss" scoped>
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin-left: 5px;
    .n-gradient-text {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
