<script setup>
import { NResult, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const { replace } = useRouter()
</script>

<template>
  <div class="page-404">
    <n-result status="404" description="抱歉，您访问的页面不存在。">
      <template #icon>
        <img src="@/assets/imgs/404/404.png" width="500" />
      </template>
      <template #footer>
        <n-button @click="replace('/')">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<style lang="scss" scoped>
.page-404 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
