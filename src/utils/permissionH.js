import { permission } from '@/directives'
/**
 * @description: 按钮权限渲染
 */
import { h, withDirectives } from 'vue'

export function PH(el, props, slots, butCode) {
  return withDirectives(
    h(el, props, slots),
    [
      [permission, butCode],
    ],
  )
}
