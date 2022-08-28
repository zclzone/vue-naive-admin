<template>
  <CommonPage :show-header="false">
    <n-button type="error" @click="handleDelete"> <icon-mi:delete mr-5 />删除</n-button>
  </CommonPage>
</template>

<script setup name="TestDialog">
const handleDelete = function () {
  $dialog.confirm({
    content: '确认删除？',
    confirm() {
      $message.success('删除成功')
    },
    cancel() {
      $message.warning('已取消')
    },
  })
}
</script>
