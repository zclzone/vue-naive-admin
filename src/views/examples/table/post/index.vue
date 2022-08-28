<template>
  <CommonPage show-footer title="文章">
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
  </CommonPage>
</template>

<script setup>
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
