<template>
  <div>
    <n-popover trigger="click">
      <template #trigger>
        <i class="i-me-theme cursor-pointer text-40" />
      </template>
      <div class="h-600 w-260">
        <h3 class="font-normal">主题设置</h3>

        <n-divider>布局</n-divider>
        <ul class="h-32 flex items-center justify-between">
          <li
            v-for="(item, index) in layouts"
            :key="index"
            class="cursor-pointer opacity-70"
            @click="appStore.setLayout(item.value)"
          >
            {{ item.desc }}
          </li>
        </ul>

        <n-divider>主题色</n-divider>
      </div>
    </n-popover>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
const layouts = [
  { value: 'simple', desc: '简约' },
  { value: 'normal', desc: '通用' },
  { value: 'full', desc: '全面' },
  { value: 'empty', desc: '空白' },
]
</script>
