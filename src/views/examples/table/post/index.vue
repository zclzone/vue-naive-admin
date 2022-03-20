<template>
  <div p24>
    <div class="action-btns">
      <n-button size="small" type="primary" @click="handleCreate">新建文章</n-button>
    </div>
    <n-data-table
      mt-20
      :loading="loading"
      :scroll-x="1600"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
      :row-key="(row) => row.id"
      max-height="calc(100vh - 250px)"
      @update:checked-row-keys="handleCheck"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import { getTableData, createColumns } from './post-table'

const router = useRouter()

// 静态变量
const columns = createColumns({
  handleDelete,
  handleRecommend,
  handlePublish,
})

// refs
let tableData = ref([])
let pagination = ref({ pageSize: 10 })
let loading = ref(false)

// 钩子函数
onBeforeMount(() => {
  initTableData()
})

// fns
async function initTableData() {
  loading.value = true
  tableData.value = await getTableData()
  loading.value = false
}

function handleCreate() {
  router.push('/example/table/post-create')
}

function handleDelete(row) {
  if (row && row.id) {
    $dialog.confirm({
      content: '确定删除？',
      confirm() {
        $message.success('删除成功')
        initTableData()
      },
      cancel() {
        $message.success('已取消')
      },
    })
  }
}

async function handleRecommend(row) {
  if (row && row.id) {
    row.recommending = true
    setTimeout(() => {
      $message.success(row.isRecommend ? '已取消推荐' : '已推荐')
      row.recommending = false
    }, 800)
  }
}

async function handlePublish(row) {
  if (row && row.id) {
    row.publishing = true
    setTimeout(() => {
      $message.success(row.isPublish ? '已取消推荐' : '已推荐')
      row.publishing = false
    }, 800)
  }
}

function handleCheck(rowKeys) {}
</script>

<style lang="scss" scoped>
.action-btns {
  display: flex;
}
</style>
