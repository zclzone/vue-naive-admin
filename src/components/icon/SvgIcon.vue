<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    default: 'icon-custom',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
</script>

<template>
  <svg aria-hidden="true" width="1em" height="1em">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
