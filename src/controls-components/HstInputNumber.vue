<script lang="ts">
export default {
  name: 'HstInputNumber',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  modelValue: number
  min?: number
  max?: number
}>()

const emit = defineEmits({
  'update:modelValue': (newValue: number) => true,
})

const NumberValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <label class="container">
    <span
      class="title"
    >
      {{ title }}
    </span>
    <el-input-number v-model="NumberValue" :min="min" :max="max" size="small" />
  </label>
</template>

<style scoped>
.container {
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  display: flex;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-shrink: 0;
  width: 7rem;
}
</style>
