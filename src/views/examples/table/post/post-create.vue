<template>
  <div>
    <div class="header">
      <input v-model="post.title" type="text" placeholder="输入文章标题..." class="title" />
      <n-button type="primary" style="width: 80px" :loading="btnLoading" @click="handleSavePost">保存</n-button>
    </div>
    <MdEditor v-model="post.content" style="height: calc(100vh - 140px)" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const router = useRouter()

// refs
let post = ref({})
let btnLoading = ref(false)

function handleSavePost(e) {
  btnLoading.value = true
  $message.loading('正在保存...')
  setTimeout(() => {
    $message.success('保存成功')
    btnLoading.value = false
    router.push('/example/table/post')
  }, 2000)
}
</script>

<style lang="scss">
.md-preview {
  ul,
  ol {
    list-style: revert;
  }
}
</style>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  .title {
    flex: 1;
    padding: 15px 0;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    color: $primaryColor;
  }
}
</style>
