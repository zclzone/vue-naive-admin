<script setup>
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'

const userStore = useUserStore()
const router = useRouter()

const options = [
  {
    label: '退出登录',
    key: 'logout',
  },
]

function handleSelect(key) {
  if (key === 'logout') {
    userStore.logout()
    $message.success('已退出登录')
    router.push({ path: '/login' })
  }
}
</script>

<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div class="avatar">
      <img :src="userStore.avatar" />
      <span>{{ userStore.name }}</span>
    </div>
  </n-dropdown>
</template>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 100%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
