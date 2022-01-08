<script setup>
import { useMessage } from 'naive-ui'

const NMessage = useMessage()

let loadingMessage = null

class Message {
  /**
   * 规则：
   * * 同一Message实例只显示一个loading message，如果需要显示多个可以创建多个Message实例
   * * 新的message会替换正在显示的loading message
   * * 默认已创建一个Message实例$message挂载到window，同时也将Message类挂载到了window
   */

  removeMessage(message, duration = 2000) {
    setTimeout(() => {
      if (message) {
        message.destroy()
        message = null
      }
    }, duration)
  }

  showMessage(type, content, option = {}) {
    if (this.loadingMessage && this.loadingMessage.type === 'loading') {
      // 如果存在则替换正在显示的loading message
      this.loadingMessage.type = type
      this.loadingMessage.content = content

      if (type !== 'loading') {
        // 非loading message需设置自动清除
        this.removeMessage(this.loadingMessage, option.duration)
      }
    } else {
      // 不存在正在显示的loading则新建一个message,如果新建的message是loading message则将message赋值存储下来
      let message = NMessage[type](content, option)
      if (type === 'loading') {
        this.loadingMessage = message
      }
    }
  }

  loading(content) {
    this.showMessage('loading', content, { duration: 0 })
  }

  success(content, option = {}) {
    this.showMessage('success', content, option)
  }

  error(content, option = {}) {
    this.showMessage('error', content, option)
  }

  info(content, option = {}) {
    this.showMessage('info', content, option)
  }

  warning(content, option = {}) {
    this.showMessage('warning', content, option)
  }
}

window['$message'] = new Message()

Object.defineProperty(window, '$message', {
  configurable: false,
  writable: false,
})
</script>

<template></template>
