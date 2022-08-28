<template>
  <CommonPage title="我是自定义Title">
    <n-button type="primary" @click="handleLogin">
      <icon-mdi:login mr-5 />
      登陆
    </n-button>
  </CommonPage>
</template>

<script setup>
function handleLogin() {
  $message.loading('登陆中...')
  setTimeout(() => {
    $message.error('登陆失败')
    $message.loading('正在尝试重新登陆...')
    setTimeout(() => {
      $message.success('登陆成功')
    }, 2000)
  }, 2000)
}
</script>
