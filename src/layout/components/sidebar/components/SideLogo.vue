<template>
  <router-link h-60 f-c-c to="/">
    <img src="@/assets/images/logo.png" height="42" />
    <h2 v-show="!appStore.collapsed" ml-10 max-w-140 flex-shrink-0 text-16 font-bold color-primary>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
import { useAppStore } from '@/store'
const title = import.meta.env.VITE_TITLE

const appStore = useAppStore()
</script>
