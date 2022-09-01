<template>
  <QueryBar v-if="$slots.queryBar" mb-30 @search="handleSearch" @reset="handleReset">
    <slot name="queryBar" />
  </QueryBar>

  <n-data-table
    :remote="remote"
    :loading="loading"
    :scroll-x="scrollX"
    :columns="columns"
    :data="tableData"
    :row-key="(row) => row[rowKey]"
    :pagination="isPagination ? pagination : false"
    @update:checked-row-keys="onChecked"
    @update:page="onPageChange"
  />
</template>

<script setup>
const props = defineProps({
  /**
   * @remote true: 后端分页  false： 前端分页
   */
  remote: {
    type: Boolean,
    default: true,
  },
  /**
   * @remote 是否分页
   */
  isPagination: {
    type: Boolean,
    default: true,
  },
  scrollX: {
    type: Number,
    default: 1200,
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  columns: {
    type: Array,
    required: true,
  },
  queryForm: {
    type: Object,
    required: true,
  },
  getData: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['update:queryForm', 'onChecked'])
const loading = ref(false)
const initQuery = { ...props.queryForm }
const tableData = ref([])
const pagination = reactive({ page: 1, pageSize: 10, itemCount: 100 })

async function handleQuery(extraParams = {}) {
  try {
    loading.value = true
    const res = await props.getData(
      { ...props.queryForm, ...extraParams },
      { pageNo: pagination.page, pageSize: pagination.pageSize }
    )
    tableData.value = res?.pageData || res
    pagination.itemCount = res.total ?? res.length
  } catch (error) {
    tableData.value = []
    pagination.itemCount = 0
    $message.error(error.message)
  } finally {
    loading.value = false
  }
}
function handleSearch() {
  pagination.page = 1
  handleQuery()
}
async function handleReset() {
  emit('update:queryForm', { ...initQuery })
  await nextTick()
  pagination.page = 1
  handleQuery()
}
function onChecked(rowKeys) {
  if (props.columns.some((item) => item.type === 'selection')) {
    emit('onChecked', rowKeys)
  }
}
function onPageChange(currentPage) {
  pagination.page = currentPage
  if (props.remote) {
    handleQuery()
  }
}

defineExpose({
  handleSearch,
  handleReset,
})
</script>
