<template>
  <div p24>
    <n-button type="primary" @click="handleLogin">点击登陆</n-button>
  </div>
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
