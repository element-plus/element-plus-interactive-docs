<script lang="ts">
export default {
  name: 'HstColor',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  modelValue: string
}>()

const emit = defineEmits({
  'update:modelValue': (newValue: string) => true,
})

const colorModel = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>

<template>
  <span style="padding: 0 8px; font-size: 14px; margin-right: 68px;">
    {{ title }}:
  </span>
  <el-color-picker
    v-model="colorModel"
    color-format="hex"
    size="small"
    show-alpha
    :predefine="predefineColors"
  />
</template>
