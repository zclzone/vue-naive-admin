<template>
  <CommonPage show-footer>
    <n-space size="large">
      <n-card title="按钮 Button">
        <n-space>
          <n-button>Default</n-button>
          <n-button type="tertiary"> Tertiary </n-button>
          <n-button type="primary"> Primary </n-button>
          <n-button type="info"> Info </n-button>
          <n-button type="success"> Success </n-button>
          <n-button type="warning"> Warning </n-button>
          <n-button type="error"> Error </n-button>
        </n-space>
      </n-card>

      <n-card title="带 Icon 的按钮">
        <n-space>
          <n-button type="info"> <TheIcon icon="material-symbols:add" :size="18" class="mr-5" /> 新增 </n-button>
          <n-button type="error">
            <TheIcon icon="material-symbols:delete-outline" :size="18" class="mr-5" /> 删除
          </n-button>
          <n-button type="warning">
            <TheIcon icon="material-symbols:edit-outline" :size="18" class="mr-5" /> 编辑
          </n-button>
          <n-button type="primary"> <TheIcon icon="majesticons:eye-line" :size="18" class="mr-5" /> 查看 </n-button>
        </n-space>
      </n-card>
    </n-space>

    <n-space size="large" mt-30>
      <n-card min-w-340 title="通知 Notification">
        <n-space>
          <n-button @click="notify('info')"> 信息 </n-button>
          <n-button @click="notify('success')"> 成功 </n-button>
          <n-button @click="notify('warning')"> 警告 </n-button>
          <n-button @click="notify('error')"> 错误 </n-button>
        </n-space>
      </n-card>

      <n-card min-w-340 title="确认弹窗 Dialog">
        <n-button type="error" @click="handleDelete"> <icon-mi:delete mr-5 />删除</n-button>
      </n-card>

      <n-card min-w-340 title="消息提醒 Message">
        <n-button :loading="loading" type="primary" @click="handleLogin">
          <icon-mdi:login v-show="!loading" mr-5 />
          登陆
        </n-button>
      </n-card>
    </n-space>
  </CommonPage>
</template>

<script setup>
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

const loading = ref(false)
function handleLogin() {
  loading.value = true
  $message.loading('登陆中...')
  setTimeout(() => {
    $message.error('登陆失败')
    $message.loading('正在尝试重新登陆...')
    setTimeout(() => {
      $message.success('登陆成功')
      loading.value = false
    }, 2000)
  }, 2000)
}

function notify(type) {
  $notification[type]({
    content: '说点啥呢',
    meta: '想不出来',
    duration: 2500,
    keepAliveOnHover: true,
  })
}
</script>
