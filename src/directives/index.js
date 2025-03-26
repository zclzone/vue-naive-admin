/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:23:01
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

import { router } from '@/router'
import { withDirectives } from 'vue'

const permission = {
  mounted(el, binding) {
    const currentRoute = unref(router.currentRoute)
    const btns = currentRoute.meta?.btns?.map(item => item.code) || []
    let permissionBtns = []

    if (Array.isArray(permissionBtns)) {
      permissionBtns = binding.value
    }
    else {
      permissionBtns = binding.value?.split(',')
    }
    if (!btns.filter(item => permissionBtns.includes(item)).length) {
      el.remove()
    }
  },
}

export function setupDirectives(app) {
  app.directive('permission', permission)
}

/**
 * 用于h函数使用自定义权限指令
 *
 * @param {*} vnode 虚拟节点
 * @param {*} code 权限码
 * @returns 返回一个包含权限指令的vnode
 *
 * 使用示例：withPermission(h('button', {class: 'text-red-500'}, '删除'), 'user:delete')
 *
 */
export function withPermission(vnode, code) {
  return withDirectives(vnode, [[permission, code]])
}
