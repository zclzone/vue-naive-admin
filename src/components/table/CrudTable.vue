<template>
  <QueryBar v-if="$slots.queryBar" mb-30>
    <slot name="queryBar" />
  </QueryBar>
  <slot />
</template>

<script setup>
const loading = ref(false)
const tableData = ref([])
const showModal = ref(true)
const segmented = {
  content: 'soft',
  footer: 'soft',
}
</script>
