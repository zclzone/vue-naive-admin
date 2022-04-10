<template>
  <div class="page-404">
    <n-result status="404" description="抱歉，您访问的页面不存在。">
      <template #icon>
        <img src="@/assets/images/404.png" width="300" />
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
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
