<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/05 21:28:53
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <CommonPage>
    <div class="flex">
      <n-spin size="small" :show="treeLoading">
        <MenuTree
          v-model:currentMenu="currentMenu"
          class="w-320 shrink-0"
          :tree-data="treeData"
          @refresh="initData"
        />
      </n-spin>

      <div class="ml-40 w-0 flex-1">
        <template v-if="currentMenu">
          <div class="flex justify-between">
            <h3 class="mb-12">{{ currentMenu.name }}</h3>
            <n-button
              :disabled="!currentMenu"
              size="small"
              type="primary"
              @click="handleEdit(currentMenu)"
            >
              <i class="i-material-symbols:edit-outline mr-4 text-14" />
              编辑
            </n-button>
          </div>
          <n-descriptions label-placement="left" bordered :column="2">
            <n-descriptions-item label="编码">{{ currentMenu.code }}</n-descriptions-item>
            <n-descriptions-item label="名称">{{ currentMenu.name }}</n-descriptions-item>
            <n-descriptions-item label="路由地址">
              {{ currentMenu.path ?? '--' }}
            </n-descriptions-item>
            <n-descriptions-item label="组件路径">
              {{ currentMenu.component ?? '--' }}
            </n-descriptions-item>
            <n-descriptions-item label="菜单图标">
              <span v-if="currentMenu.icon" class="flex items-center">
                <i :class="`${currentMenu.icon}?mask text-22 mr-8`" />
                <span class="opacity-50">{{ currentMenu.icon }}</span>
              </span>
              <span v-else>无</span>
            </n-descriptions-item>
            <n-descriptions-item label="layout">
              {{ currentMenu.layout || '跟随系统' }}
            </n-descriptions-item>
            <n-descriptions-item label="是否显示">
              {{ currentMenu.show ? '是' : '否' }}
            </n-descriptions-item>
            <n-descriptions-item label="是否启用">
              {{ currentMenu.enable ? '是' : '否' }}
            </n-descriptions-item>
            <n-descriptions-item label="KeepAlive">
              {{ currentMenu.keepAlive ? '是' : '否' }}
            </n-descriptions-item>
            <n-descriptions-item label="排序">
              {{ currentMenu.order ?? '--' }}
            </n-descriptions-item>
          </n-descriptions>
        </template>
        <n-empty v-else class="h-450 f-c-c" size="large" description="请选择菜单查看详情" />
      </div>
    </div>
    <ResAddOrEdit ref="modalRef" :menus="treeData" @refresh="initData" />
  </CommonPage>
</template>

<script setup>
import MenuTree from './components/MenuTree.vue'
import ResAddOrEdit from './components/ResAddOrEdit.vue'
import api from './api'

const treeData = ref([])
const treeLoading = ref(false)
async function initData(data) {
  treeLoading.value = true
  const res = await api.getMenuTree()
  treeData.value = res?.data || []
  treeLoading.value = false

  if (data) currentMenu.value = data
}
initData()

const currentMenu = ref(null)

const modalRef = ref(null)
function handleEdit(item = {}) {
  modalRef.value?.handleOpen({
    action: 'edit',
    title: '编辑菜单 - ' + item.name,
    row: item,
    okText: '保存',
  })
}
</script>
