<template>
  <AppPage :show-footer="showFooter">
    <n-card rounded-10 flex-1>
      <slot v-if="showHeader" name="header">
        <h2 mb-15 color="#333">{{ title || route.meta?.title }}</h2>
      </slot>
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
