<script setup lang="ts">
import { ref, watch } from 'vue'
import type { DatePickType } from 'element-plus'

const date = ref('')
const size = ref<'large' | 'default' | 'small'>('default')
const type = ref<DatePickType>('date')
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
const typeList = [
  {
    label: 'year',
    value: 'year',
  },
  {
    label: 'month',
    value: 'month',
  },
  {
    label: 'date',
    value: 'date',
  },
  {
    label: 'week',
    value: 'week',
  },
]
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>

<template>
  <Story title="Form/DatePicker">
    <Variant title="Basic Usage">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
      </template>
    </Variant>
    <Variant title="Quick options">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        :shortcuts="shortcuts"
        :size="size"
      />
    </Variant>
    <Variant title="Other measurements">
      <el-date-picker
        v-model="date"
        :type="type"
        placeholder="Pick a day"
        :size="size"
      />
      <template #controls>
        <HstRadio v-model="type" :options="typeList" title="Type" />
      </template>
    </Variant>
  </Story>
</template>
