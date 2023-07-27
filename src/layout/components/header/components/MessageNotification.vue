<template>
  <n-popover trigger="click" placement="bottom" @update:show="handlePopoverShow">
    <template #trigger>
      <n-badge :value="count" mr-20 cursor-pointer>
        <n-icon size="18" color-black dark="color-hex-fff">
          <icon-material-symbols:notifications-outline />
        </n-icon>
      </n-badge>
    </template>
    <n-tabs v-model:value="activeTab" type="line" justify-content="space-around" animated>
      <n-tab-pane
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name"
        :tab="tab.title + `(${tab.messages.length})`"
      >
        <ul class="cus-scroll-y max-h-200 w-220">
          <li
            v-for="(item, index) in tab.messages"
            :key="index"
            class="flex-col py-12"
            border-t="1 solid gray-200"
            :style="index > 0 ? '' : 'border: none;'"
          >
            <span mb-4 text-ellipsis>{{ item.content }}</span>
            <span text-hex-bbb>{{ item.time }}</span>
          </li>
        </ul>
      </n-tab-pane>
    </n-tabs>
  </n-popover>
</template>

<script setup>
import { formatDateTime } from '@/utils'

const activeTab = ref('')
const tabs = [
  {
    name: 'zan',
    title: '点赞',
    messages: [
      { content: '你的文章《XX》收到一条点赞', time: formatDateTime() },
      { content: '你的文章《YY》收到一条点赞', time: formatDateTime() },
      { content: '你的文章《AA》收到一条点赞', time: formatDateTime() },
      { content: '你的文章《BB》收到一条点赞', time: formatDateTime() },
      { content: '你的文章《CC》收到一条点赞', time: formatDateTime() },
      { content: '你的文章《DD》收到一条点赞', time: formatDateTime() },
    ],
  },
  {
    name: 'star',
    title: '关注',
    messages: [
      { content: '张三 关注了你', time: formatDateTime() },
      { content: '王五 关注了你', time: formatDateTime() },
    ],
  },
  {
    name: 'comment',
    title: '评论',
    messages: [
      { content: '张三 评论了你的文章《XX》"学到了"', time: formatDateTime() },
      { content: '李四 评论了你的文章《YY》"不如Vue"', time: formatDateTime() },
    ],
  },
]
const count = ref(tabs.map((item) => item.messages).flat().length)

watch(activeTab, (v) => {
  if (count === 0) return
  const tabIndex = tabs.findIndex((item) => item.name === v)
  count.value -= tabs[tabIndex].messages.length
  if (count.value < 0) count.value = 0
})

function handlePopoverShow(show) {
  if (show && !activeTab.value) {
    activeTab.value = tabs[0]?.name
  }
}
</script>
