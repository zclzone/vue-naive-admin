<template>
  <CommonPage show-footer title="文章">
    <template #action>
      <n-button type="primary" @click="modalVisible = true">
        <TheIcon icon="material-symbols:add" :size="18" class="mr-5" /> 新建文章
      </n-button>
    </template>

    <CrudTable>
      <template #queryBar>
        <QueryBarItem label="标题" :label-width="50">
          <n-input v-model:value="queryForm.title" type="text" placeholder="请输入标题" />
        </QueryBarItem>
      </template>

      <n-data-table
        :loading="loading"
        :scroll-x="1600"
        :data="tableData.filter((item) => item.title.includes(queryForm.title))"
        :columns="columns"
        :pagination="pagination"
        :row-key="(row) => row.id"
        @update:checked-row-keys="handleCheck"
      />

      <!-- 新增/编辑/查看 -->
      <CrudModal v-model:visible="modalVisible" :title="modalTitle" @on-save="handleSave"> 内容 </CrudModal>
    </CrudTable>
  </CommonPage>
</template>

<script setup>
import { usePostTable } from './usePostTable'

const queryForm = reactive({
  title: '',
})
const modalVisible = ref(false)
const modalTitle = ref('新增文章')

const pagination = reactive({ pageSize: 10 })
const { loading, columns, tableData, initColumns, initTableData } = usePostTable()

onBeforeMount(() => {
  initColumns()
  initTableData()
})

function handleSave() {
  modalVisible.value = false
}

function handleCheck(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}
</script>
