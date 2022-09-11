<template>
  <CommonPage show-footer>
    <div w-350>
      <n-input v-model:value="inputVal" />
      <n-input-number v-model:value="number" mt-30 />
      <p mt-20 text-center color-gray text-14>注：右击标签重新加载可重置keep-alive</p>
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
