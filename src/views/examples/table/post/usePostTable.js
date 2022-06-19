import { h } from 'vue'
import { NButton, NSwitch } from 'naive-ui'
import { getPosts } from '@/api/post'
import { formatDateTime } from '@/utils'

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

  function initColumns() {
    columns.value = [
      { type: 'selection' },
      { title: '标题', key: 'title', width: 150 },
      { title: '分类', key: 'category', width: 80 },
      {
        title: '描述',
        key: 'description',
        width: 200,
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
        width: 100,
        align: 'center',
        fixed: 'right',
        render(row) {
          return h(NSwitch, {
            size: 'small',
            defaultValue: row['isRecommend'],
            loading: !!row.recommending,
            onUpdateValue: () => handleRecommend(row),
          })
        },
      },
      {
        title: '发布',
        key: 'isPublish',
        width: 100,
        align: 'center',
        fixed: 'right',
        render(row) {
          return h(NSwitch, {
            size: 'small',
            defaultValue: row['isPublish'],
            loading: !!row.publishing,
            onUpdateValue: () => handlePublish(row),
          })
        },
      },
      {
        title: '操作',
        key: 'actions',
        width: 120,
        align: 'center',
        fixed: 'right',
        render(row) {
          return [
            h(
              NButton,
              {
                size: 'small',
                type: 'error',
                style: 'margin-left: 15px;',
                onClick: () => handleDelete(row),
              },
              { default: () => '删除' }
            ),
          ]
        },
      },
    ]
  }

  async function getTableData() {
    try {
      const res = await getPosts()
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
