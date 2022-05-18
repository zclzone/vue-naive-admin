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
      @update:checked-row-keys="handleCheck"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { usePostTable } from './usePostTable'

const router = useRouter()

const pagination = ref({ pageSize: 10 })
const { loading, columns, tableData, initColumns, initTableData } = usePostTable()

onBeforeMount(() => {
  initColumns()
  initTableData()
})

function handleCreate() {
  router.push('/example/table/post-create')
}

function handleCheck(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}
</script>

<style lang="scss" scoped>
.action-btns {
  display: flex;
}
</style>
