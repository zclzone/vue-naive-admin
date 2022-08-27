<script setup>
import { renderCustomIcon } from '@/utils/icon'

const props = defineProps({
  /** 图标名称(图片的文件名) */
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 14,
  },
  color: {
    type: String,
    default: undefined,
  },
})

const iconCom = computed(() => renderCustomIcon(props.icon, props))
</script>

<template>
  <component :is="iconCom" />
</template>
