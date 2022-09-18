<script setup>
import { renderIcon, renderCustomIcon } from '@/utils'

const props = defineProps({
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
  /** iconify | custom */
  type: {
    type: String,
    default: 'iconify',
  },
})

const iconCom = computed(() =>
  props.type === 'iconify'
    ? renderIcon(props.icon, { size: props.size, color: props.color })
    : renderCustomIcon(props.icon, { size: props.size, color: props.color })
)
</script>

<template>
  <component :is="iconCom" />
</template>
