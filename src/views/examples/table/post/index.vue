<template>
  <CommonPage show-footer title="文章">
    <template #action>
      <n-button type="primary" @click="modalVisible = true">
        <TheIcon icon="material-symbols:add" :size="18" class="mr-5" /> 新建文章
      </n-button>
    </template>

    <CrudTable
      ref="$table"
      v-model:query-form="queryForm"
      :scroll-x="1600"
      :columns="columns"
      :get-data="getTableData"
      @on-checked="onChecked"
    >
      <template #queryBar>
        <QueryBarItem label="标题" :label-width="50">
          <n-input v-model:value="queryForm.title" type="text" placeholder="请输入标题" />
        </QueryBarItem>
      </template>
    </CrudTable>
    <!-- 新增/编辑/查看 -->
    <CrudModal v-model:visible="modalVisible" :title="modalTitle" @on-save="handleSave"> 内容 </CrudModal>
  </CommonPage>
</template>

<script setup>
import { NButton, NSwitch } from 'naive-ui'
import { formatDateTime } from '@/utils'
import { renderIcon } from '@/utils/icon'
import api from './api'

const $table = ref(null)
const queryForm = ref({
  title: '',
})

async function getTableData(query = {}, pagination = {}) {
  const { pageSize = 10, pageNo = 1 } = pagination
  try {
    // * 参数可自定义，如不需要后端分页则可以不传 pagination 相关参数
    const res = await api.getPosts({ ...query, pageSize, pageNo })
    if (res.code === 0) {
      return Promise.resolve(res.data)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
// 选中事件
function onChecked(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}

const columns = [
  { type: 'selection' },
  { title: '标题', key: 'title', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'category', width: 80, ellipsis: { tooltip: true } },
  {
    title: '描述',
    key: 'description',
    width: 200,
    ellipsis: { tooltip: true },
  },
  { title: '创建人', key: 'author', width: 80 },
  {
    title: '创建时间',
    key: 'createDate',
    width: 150,
    render(row) {
      return h('span', formatDateTime(row['createDate']))
    },
  },
  {
    title: '最后更新时间',
    key: 'updateDate',
    width: 150,
    render(row) {
      return h('span', formatDateTime(row['updateDate']))
    },
  },
  {
    title: '推荐',
    key: 'isRecommend',
    width: 120,
    align: 'center',
    fixed: 'right',
    render(row) {
      return h(NSwitch, {
        size: 'small',
        value: row['isRecommend'],
        rubberBand: false,
        loading: !!row.recommending,
        onUpdateValue: () => handleRecommend(row),
      })
    },
  },
  {
    title: '发布',
    key: 'isPublish',
    width: 120,
    align: 'center',
    fixed: 'right',
    render(row) {
      return h(NSwitch, {
        size: 'small',
        rubberBand: false,
        value: row['isPublish'],
        loading: !!row.publishing,
        onUpdateValue: () => handlePublish(row),
      })
    },
  },
  {
    title: '操作',
    key: 'actions',
    width: 200,
    align: 'center',
    fixed: 'right',
    render(row) {
      return [
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            onClick: () => handleEdit(row),
          },
          { default: () => '编辑', icon: renderIcon('material-symbols:edit-outline', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'error',
            style: 'margin-left: 15px;',
            onClick: () => handleDelete(row),
          },
          { default: () => '删除', icon: renderIcon('material-symbols:delete-outline', { size: 14 }) }
        ),
      ]
    },
  },
]

onMounted(() => {
  $table.value?.handleSearch()
})

const modalVisible = ref(false)
const modalTitle = ref('新增文章')

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

function handleEdit(row) {
  modalTitle.value = '编辑文章'
  modalVisible.value = true
}

function handleSave() {
  modalVisible.value = false
}
</script>
