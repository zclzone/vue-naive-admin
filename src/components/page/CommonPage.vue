<template>
  <AppPage :show-footer="showFooter">
    <header v-if="showHeader" px-15 mb-15 min-h-45 flex justify-between items-center>
      <slot v-if="$slots.header" name="header" />
      <template v-else>
        <h2 color="#333" text-22 font-normal>{{ title || route.meta?.title }}</h2>
        <slot name="action" />
      </template>
    </header>

    <n-card rounded-10 flex-1>
      <slot />
    </n-card>
  </AppPage>
</template>

<script setup>
defineProps({
  showFooter: {
    type: Boolean,
    default: false,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: undefined,
  },
})
const route = useRoute()
</script>
