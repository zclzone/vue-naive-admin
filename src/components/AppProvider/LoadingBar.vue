<script setup>
import { useLoadingBar } from 'naive-ui'
window['$loadingBar'] = useLoadingBar()
Object.defineProperty(window, '$loadingBar', {
  configurable: false,
  writable: false,
})
</script>

<template></template>
