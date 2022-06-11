<template></template>

<script setup>
import { isNullOrUndef } from '@/utils/is'
import { useDialog } from 'naive-ui'

const NDialog = useDialog()

NDialog.confirm = function (option = {}) {
  const showIcon = !isNullOrUndef(option.title)
  return NDialog[option.type || 'warning']({
    showIcon,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: option.confirm,
    onNegativeClick: option.cancel,
    onMaskClick: option.cancel,
    ...option,
  })
}

window['$dialog'] = NDialog
Object.freeze(window.$dialog)
Object.defineProperty(window, '$dialog', {
  configurable: false,
  writable: false,
})
</script>
