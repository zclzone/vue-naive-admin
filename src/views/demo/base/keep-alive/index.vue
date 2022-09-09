<template>
  <CommonPage>
    <div w-350>
      <n-input v-model:value="inputVal" />
      <n-input-number v-model:value="number" mt-30 />
    </div>
  </CommonPage>
</template>

<script setup>
defineOptions({ name: 'KeepAlive' })

const inputVal = ref('')
const number = ref(0)

onMounted(() => {
  $message.success('onMounted')
})

onUnmounted(() => {
  $message.error('onUnmounted')
})

onActivated(() => {
  $message.info('onActivated')
})
onDeactivated(() => {
  $message.warning('onDeactivated')
})
</script>
