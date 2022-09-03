import { h } from 'vue'
import { NButton, NSwitch } from 'naive-ui'
import { formatDateTime } from '@/utils'
import { renderIcon } from '@/utils/icon'
import api from './api'

export const usePostTable = () => {
  // refs
  const loading = ref(false)
  const tableData = ref([])
  const columns = ref([])

  async function initTableData() {
    loading.value = true
    tableData.value = await getTableData()
    loading.value = false
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

  function handleEdit(row) {
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
        row.isRecommend = !row.isRecommend
        row.recommending = false
        $message.success(row.isRecommend ? '已推荐' : '已取消推荐')
      }, 800)
    }
  }

  async function handlePublish(row) {
    if (row && row.id) {
      row.publishing = true
      setTimeout(() => {
        row.isPublish = !row.isPublish
        row.publishing = false
        $message.success(row.isPublish ? '已发布' : '已取消发布')
      }, 800)
    }
  }

  function initColumns() {
    columns.value = [
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
  }

  async function getTableData() {
    try {
      const res = await api.getPosts()
      if (res.code === 0) {
        return res.data
      }
      console.warn(res.message)
      return []
    } catch (error) {
      console.error(error)
      return []
    }
  }

  return {
    loading,
    columns,
    tableData,
    initColumns,
    initTableData,
  }
}
