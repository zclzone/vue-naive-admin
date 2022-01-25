<script setup name="TestDialog">
import { NButton } from 'naive-ui'
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

<template>
  <n-button @click="handleDelete">删除</n-button>
</template>
