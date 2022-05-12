<template>
  <div p24>
    <n-button type="error" @click="handleDelete">删除</n-button>
  </div>
</template>

<script setup name="TestDialog">
const handleDelete = function () {
  $dialog.confirm({
    content: '确认删除？',
    confirm() {
      $dialog.success('删除成功', { positiveText: '我知道了' })
    },
    cancel() {
      $dialog.warning('已取消', { closable: true })
    },
  })
}
</script>
