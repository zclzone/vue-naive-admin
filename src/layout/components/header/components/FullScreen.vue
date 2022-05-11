<template>
  <n-icon mr20 size="18" style="cursor: pointer" @click="toggle">
    <IconFullscreenExit v-if="isFullscreen" />
    <IconFullscreen v-else />
  </n-icon>
</template>

<script setup>
import { IconFullscreen, IconFullscreenExit } from '@/components/AppIcons'
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<style lang="scss" scoped></style>
