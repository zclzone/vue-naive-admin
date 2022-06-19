<template>
  <div p24>
    <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"> 注意查看提示语 </n-gradient-text>
  </div>
</template>

<!--使用keep-alive须设置name，注意请与对应的路由的name保持一致，方便统一处理-->
<script setup name="TestKeepAlive">
onMounted(() => {
  $message.success('触发onMounted')
})

onActivated(() => {
  $message.success('触发onActivated')
})

onDeactivated(() => {
  $message.success('触发onDeactivated')
})
</script>
