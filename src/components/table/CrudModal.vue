<template>
  <n-modal v-model:show="show" :style="{ width }" preset="card" :title="title" size="huge" :bordered="false">
    <slot />
    <template v-if="showFooter" #footer>
      <footer flex justify-end>
        <slot name="footer">
          <n-button @click="show = false">取消</n-button>
          <n-button :loading="loading" ml-20 type="primary" @click="emit('onSave')">保存</n-button>
        </slot>
      </footer>
    </template>
  </n-modal>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '600px',
  },
  title: {
    type: String,
    default: '',
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:visible', 'onSave'])
const show = computed({
  get() {
    return props.visible
  },
  set(v) {
    emit('update:visible', v)
  },
})
</script>
