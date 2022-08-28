<template>
  <AppPage>
    <n-result m-auto status="404" description="抱歉，您访问的页面不存在。">
      <template #icon>
        <img src="@/assets/images/404.webp" width="500" />
      </template>
      <template #footer>
        <n-button @click="replace('/')">返回首页</n-button>
      </template>
    </n-result>
  </AppPage>
</template>

<script setup>
const { replace } = useRouter()
</script>
