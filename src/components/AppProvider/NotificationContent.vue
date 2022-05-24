<template></template>

<script setup>
import { useNotification } from 'naive-ui'
window['$notification'] = useNotification()
Object.defineProperty(window, '$notification', {
  configurable: false,
  writable: false,
})
</script>
