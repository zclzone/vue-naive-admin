<script setup>
import { isNullOrUndef } from '@/utils/is'
import { useDialog } from 'naive-ui'

const NDialog = useDialog()

class Dialog {
  success(title, option) {
    this.showDialog('success', { title, ...option })
  }

  warning(title, option) {
    this.showDialog('warning', { title, ...option })
  }

  error(title, option) {
    this.showDialog('error', { title, ...option })
  }

  showDialog(type = 'success', option) {
    if (isNullOrUndef(option.title)) {
      // ! 没有title的情况
      option.showIcon = false
    }
    NDialog[type]({
      positiveText: 'OK',
      closable: false,
      ...option,
    })
  }

  confirm(option = {}) {
    this.showDialog(option.type || 'error', {
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: option.confirm,
      onNegativeClick: option.cancel,
      onMaskClick: option.cancel,
      ...option,
    })
  }
}

window['$dialog'] = new Dialog()
Object.freeze(window.$dialog)
Object.defineProperty(window, '$dialog', {
  configurable: false,
  writable: false,
})
</script>

<template></template>
