<template>
  <CommonPage>
    <div h-60 flex items-center bg-white pl-20 pr-20 dark:bg-dark>
      <input
        v-model="post.title"
        class="mr-20 flex-1 pb-15 pt-15 text-20 font-bold color-primary"
        dark:bg-dark
        type="text"
        placeholder="输入文章标题..."
      />
      <n-button type="primary" style="width: 80px" :loading="btnLoading" @click="handleSavePost">
        <TheIcon v-if="!btnLoading" icon="line-md:confirm-circle" class="mr-5" :size="18" />
        保存
      </n-button>
    </div>
    <MdEditor
      v-model="post.content"
      :theme="appStore.isDark ? 'dark' : 'light'"
      style="height: calc(100vh - 305px)"
    />
  </CommonPage>
</template>

<script setup>
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { useAppStore } from '@/store'

defineOptions({ name: 'MDEditor' })

const appStore = useAppStore()

// refs
let post = ref({})
let btnLoading = ref(false)

function handleSavePost() {
  btnLoading.value = true
  $message.loading('正在保存...')
  setTimeout(() => {
    $message.success('保存成功')
    btnLoading.value = false
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
