<template>
  <div min-h-60 p-15 flex items-start justify-between b-1 bc-ccc rounded-8 bg="#fafafc" dark:bg-black>
    <n-space wrap :size="[35, 15]">
      <slot />
    </n-space>

    <div flex-shrink-0>
      <n-button secondary type="primary" @click="emit('reset')">重置</n-button>
      <n-button ml-20 type="primary" @click="emit('search')">搜索</n-button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['search', 'reset'])
</script>
