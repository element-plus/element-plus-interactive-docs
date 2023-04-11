<script lang="ts" setup>
import { Edit, Warning } from '@element-plus/icons-vue'
import { cloneDeep, isNil } from 'lodash'
import { defaultMessageBoxOptions } from './controls'
import type { MessageBoxOptions } from './controls'

const props = defineProps<{
  modelValue?: MessageBoxOptions
}>()
const emit = defineEmits(['update:modelValue'])
const messageBoxData = ref<MessageBoxOptions>({} as any)
watch([messageBoxData], () => {
  const data = unref(messageBoxData)
  if (data !== unref(props.modelValue))
    emit('update:modelValue', data)
})
watch([props], () => {
  if (props.modelValue && unref(messageBoxData) !== unref(props.modelValue))
    messageBoxData.value = props.modelValue
})
onMounted(() => {
  if (isNil(props.modelValue))
    emit('update:modelValue', cloneDeep(defaultMessageBoxOptions))
  else
    messageBoxData.value = props.modelValue
})
</script>

<template>
  <HstText v-model="messageBoxData.title" title="title" />
  <HstTextarea v-model="messageBoxData.message" title="message" />
  <HstSelect
    v-model="messageBoxData.type" title="type" :options="
      [
        {
          label: 'undefined',
          value: undefined,
        },
        'success',
        'warning',
        'info',
        'error',
      ]"
  />
  <HstSelect
    v-model="messageBoxData.icon" title="icon" :options="[
      {
        label: 'undefined',
        value: undefined,
      },
      {
        label: 'Edit',
        value: Edit,
      },
      {
        label: 'Warning',
        value: Warning,
      },
    ]"
  />
  <HstCheckbox v-model="messageBoxData.showClose" title="showClose" />
  <HstCheckbox v-model="messageBoxData.center" title="center" />
  <HstCheckbox v-model="messageBoxData.draggable" title="draggable" />
</template>
