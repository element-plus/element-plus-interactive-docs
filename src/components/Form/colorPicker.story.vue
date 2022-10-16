<script setup lang="ts">
import { ref } from 'vue'
import type { ColorPickerProps } from 'element-plus'
import { logEvent } from 'histoire/client'
const color = ref('#409EFF')
const alphaColor = ref('rgba(19, 206, 102, 0.8)')
const predefine = ref(true)
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#409EFF',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const size = ref<ColorPickerProps['size']>('default')
const sizeList = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const handleChange = (val: string | null) => {
  logEvent('change', { color: val })
}
const handleActiveChange = (val: string | null) => {
  logEvent('active-change', { color: val })
}
</script>

<template>
  <Story title="Form/ColorPicker" auto-props-disabled>
    <Variant title="Basic Usage">
      <el-color-picker
        v-model="color"
        :size="size"
        @change="handleChange"
        @active-change="handleActiveChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
      </template>
    </Variant>
    <Variant title="Alpha">
      <el-color-picker
        v-model="alphaColor"
        :size="size"
        show-alpha
        @change="handleChange"
        @active-change="handleActiveChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
      </template>
    </Variant>
    <Variant title="Predefined colors">
      <el-color-picker
        v-model="color"
        :size="size"
        show-alpha
        :predefine="predefine ? predefineColors : []"
        @change="handleChange"
        @active-change="handleActiveChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
        <HstCheckbox v-model="predefine" title="predefine" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic Usage
ColorPicker requires a string typed variable to be bound to v-model.

## Alpha
ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the `show-alpha` attribute.

## Predefined colors
ColorPicker supports predefined color options
</docs>
