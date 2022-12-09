<template>
  <CommonPage show-footer title="文章">
    <template #action>
      <n-button type="primary" @click="handleAdd">
        <TheIcon icon="material-symbols:add" :size="18" class="mr-5" /> 新建文章
      </n-button>
    </template>

    <CrudTable
      ref="$table"
      v-model:query-items="queryItems"
      :extra-params="extraParams"
      :scroll-x="1200"
      :columns="columns"
      :get-data="api.getPosts"
      @on-checked="onChecked"
    >
      <template #queryBar>
        <QueryBarItem label="标题" :label-width="50">
          <n-input
            v-model:value="queryItems.title"
            type="text"
            placeholder="请输入标题"
            @keydown.enter="$table?.handleSearch"
          />
        </QueryBarItem>
      </template>
    </CrudTable>
    <!-- 新增/编辑/查看 -->
    <CrudModal
      v-model:visible="modalVisible"
      :title="modalTitle"
      :loading="modalLoading"
      :show-footer="modalAction !== 'view'"
      @on-save="handleSave"
    >
      <n-form
        ref="modalFormRef"
        label-placement="left"
        label-align="left"
        :label-width="80"
        :model="modalForm"
        :disabled="modalAction === 'view'"
      >
        <n-form-item label="作者" path="author">
          <n-input v-model:value="modalForm.author" disabled />
        </n-form-item>
        <n-form-item
          label="文章标题"
          path="title"
          :rule="{
            required: true,
            message: '请输入文章标题',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input v-model:value="modalForm.title" placeholder="请输入文章标题" />
        </n-form-item>
        <n-form-item
          label="文章内容"
          path="content"
          :rule="{
            required: true,
            message: '请输入文章内容',
            trigger: ['input', 'blur'],
          }"
        >
          <n-input
            v-model:value="modalForm.content"
            placeholder="请输入文章内容"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5,
            }"
          />
        </n-form-item>
      </n-form>
    </CrudModal>
  </CommonPage>
</template>

<script setup>
import { NButton, NSwitch } from 'naive-ui'
import { formatDateTime, renderIcon, isNullOrUndef } from '@/utils'
import { useCRUD } from '@/composables'
import api from './api'

defineOptions({ name: 'Crud' })

const $table = ref(null)
/** QueryBar筛选参数（可选） */
const queryItems = ref({})
/** 补充参数（可选） */
const extraParams = ref({})

onActivated(() => {
  $table.value?.handleSearch()
})

const columns = [
  { type: 'selection', fixed: 'left' },
  {
    title: '发布',
    key: 'isPublish',
    width: 60,
    align: 'center',
    fixed: 'left',
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
  { title: '标题', key: 'title', width: 150, ellipsis: { tooltip: true } },
  { title: '分类', key: 'category', width: 80, ellipsis: { tooltip: true } },
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
    title: '操作',
    key: 'actions',
    width: 240,
    align: 'center',
    fixed: 'right',
    render(row) {
      return [
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            secondary: true,
            onClick: () => handleView(row),
          },
          { default: () => '查看', icon: renderIcon('majesticons:eye-line', { size: 14 }) }
        ),
        h(
          NButton,
          {
            size: 'small',
            type: 'primary',
            style: 'margin-left: 15px;',
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
            onClick: () => handleDelete(row.id),
          },
          { default: () => '删除', icon: renderIcon('material-symbols:delete-outline', { size: 14 }) }
        ),
      ]
    },
  },
]

// 选中事件
function onChecked(rowKeys) {
  if (rowKeys.length) $message.info(`选中${rowKeys.join(' ')}`)
}

// 发布
function handlePublish(row) {
  if (isNullOrUndef(row.id)) return

  row.publishing = true
  setTimeout(() => {
    row.isPublish = !row.isPublish
    row.publishing = false
    $message?.success(row.isPublish ? '已发布' : '已取消发布')
  }, 1000)
}

const {
  modalVisible,
  modalAction,
  modalTitle,
  modalLoading,
  handleAdd,
  handleDelete,
  handleEdit,
  handleView,
  handleSave,
  modalForm,
  modalFormRef,
} = useCRUD({
  name: '文章',
  initForm: { author: '大脸怪' },
  doCreate: api.addPost,
  doDelete: api.deletePost,
  doUpdate: api.updatePost,
  refresh: () => $table.value?.handleSearch(),
})
</script>
