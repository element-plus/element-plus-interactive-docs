<script setup lang="ts">
import { logEvent } from 'histoire/client'
import { ref } from 'vue'

const date = ref()
const size = ref<'large' | 'default' | 'small'>('default')
const valueFormat = ref()
const range = ref(false)
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)
const defaultRangeTime: [Date, Date] = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0),
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
const rangeShortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
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
const valueFormatList = [
  {
    label: 'YYYY-MM-DD h:m:s a',
    value: 'YYYY-MM-DD h:m:s a',
  },
  {
    label: 'x',
    value: 'x',
  },
]
const handleChange = (dateTime: any) => {
  logEvent('change', { dateTime })
}
</script>

<template>
  <Story title="Form/DateTimePicker" :layout="{ type: 'grid', width: 480 }">
    <Variant title="Basic Usage">
      <el-date-picker
        v-model="date"
        type="datetime"
        placeholder="Select date and time"
        :size="size"
        @change="handleChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
      </template>
    </Variant>
    <Variant title="With shortcuts">
      <el-date-picker
        v-model="date"
        type="datetime"
        placeholder="Select date and time"
        :shortcuts="shortcuts"
        @change="handleChange"
      />
    </Variant>
    <Variant title="Date time format">
      <el-date-picker
        v-model="date"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD HH:mm:ss"
        :value-format="valueFormat"
        @change="handleChange"
      />
      <template #controls>
        <HstRadio
          v-model="valueFormat"
          :options="valueFormatList"
          title="Date time format"
        />
      </template>
    </Variant>
    <Variant title="Date and time range">
      <el-date-picker
        v-model="date"
        type="datetimerange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :size="size"
        :shortcuts="rangeShortcuts"
        @change="handleChange"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
      </template>
    </Variant>
    <Variant title="Default time">
      <el-date-picker
        v-model="date"
        :type="`datetime${range ? 'range' : ''}`"
        placeholder="Select date"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-time="range ? defaultRangeTime : defaultTime"
        @change="handleChange"
      />
      <template #controls>
        <HstCheckbox v-model="range" title="Range" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# DateTimePicker
Select date and time in one picker.

## Basic Usage
You can select date and time in one picker at the same time by setting `type` to `datetime`. The way to use shortcuts is the same as Date Picker.

## Date Time Formats
Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

## Date and time range
You can select date and time range by setting `type` to `datetimerange`.

## Default time value for start date and end date
When picking date range on the date panel with type `datetimerange`, `00:00:00` will be used as the default time value for start and end date. We can control it with the `default-time` attribute. `default-time` accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.
</docs>
