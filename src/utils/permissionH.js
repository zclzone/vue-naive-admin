import { permission } from '@/directives'
/**
 * @description: 按钮权限渲染
 */
import { withDirectives } from 'vue'

export function withPermission(vnode, code) {
  return withDirectives(vnode, [[permission, code]])
}
