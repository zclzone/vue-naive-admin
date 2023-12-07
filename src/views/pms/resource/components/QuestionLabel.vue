<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/05 21:29:05
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <span class="flex items-center">
    <n-popover v-if="content" trigger="hover">
      <template #trigger>
        <i class="i-material-symbols:help mr-4" />
      </template>
      <span>{{ content }}</span>
    </n-popover>
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})
</script>
