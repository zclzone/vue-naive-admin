<template>
  <AppPage :show-footer="true">
    <div flex-1>
      <n-card rounded-10>
        <div flex items-center>
          <img rounded-full width="60" :src="userStore.avatar" />
          <div ml-20>
            <p text-16>Hello, {{ userStore.name }}</p>
            <p mt-5 text-12 op-60>今天又是元气满满的一天</p>
          </div>
          <div ml-auto flex items-center>
            <n-statistic label="待办" :value="4">
              <template #suffix> / 10 </template>
            </n-statistic>
            <n-statistic label="Stars" w-100 ml-80>
              <a href="https://github.com/zclzone/vue-naive-admin">
                <img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin" />
              </a>
            </n-statistic>
            <n-statistic label="Forks" w-100 ml-80>
              <a href="https://github.com/zclzone/vue-naive-admin">
                <img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin" />
              </a>
            </n-statistic>
          </div>
        </div>
      </n-card>

      <n-card title="项目" size="small" :segmented="true" mt-15 rounded-10>
        <template #header-extra>
          <n-button text type="primary">更多</n-button>
        </template>
        <div flex flex-wrap justify-between>
          <n-card
            v-for="i in 10"
            :key="i"
            class="w-300 flex-shrink-0 mt-10 mb-10 cursor-pointer"
            hover:card-shadow
            title="Vue Naive Admin"
            size="small"
          >
            <p op-60>一个基于 Vue3.0、Vite、Naive UI 的轻量级后台管理模板</p>
          </n-card>
          <div w-300 h-0></div>
          <div w-300 h-0></div>
          <div w-300 h-0></div>
          <div w-300 h-0></div>
        </div>
      </n-card>
    </div>
  </AppPage>
</template>

<script setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()
</script>
