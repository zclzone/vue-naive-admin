<template>
  <router-link h-60 f-c-c to="/">
    <n-icon size="36" color="#316c72">
      <IconLogo />
    </n-icon>
    <h2 v-show="!appStore.collapsed" ml-10 color-primary text-16 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
import { IconLogo } from '@/components/AppIcons'
import { useAppStore } from '@/store/modules/app'
const title = import.meta.env.VITE_APP_TITLE

const appStore = useAppStore()
</script>
