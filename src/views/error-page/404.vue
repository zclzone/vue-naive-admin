<template>
  <div class="page-404">
    <n-result status="404" description="抱歉，您访问的页面不存在。">
      <template #icon>
        <img src="@/assets/images/404.png" width="500" />
      </template>
      <template #footer>
        <n-button strong secondary type="primary" @click="replace('/')">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const { replace } = useRouter()
</script>

<style lang="scss" scoped>
.page-404 {
  height: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
