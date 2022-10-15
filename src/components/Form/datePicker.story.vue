<script setup lang="ts">
import { h, ref, shallowRef } from 'vue'
import type { DatePickType } from 'element-plus'
import { logEvent } from 'histoire/client'
import type { DateCell } from 'element-plus/es/components/date-picker/src/date-picker.type'

const date = ref('')
const size = ref<'large' | 'default' | 'small'>('default')
const type = ref<DatePickType>('date')
const range = ref<DatePickType>('daterange')
const isRange = ref(false)
const valueFormat = ref()
const hasPrefix = ref(true)
const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})
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
const rangeList = [
  {
    label: 'datrange',
    value: 'daterange',
  },
  {
    label: 'monthrange',
    value: 'monthrange',
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
const valueFormatList = [
  {
    label: 'YYYY-MM-DD',
    value: 'YYYY-MM-DD',
  },
  {
    label: 'x',
    value: 'x',
  },
]
const handleChange = (val: any) => {
  logEvent('change', { date: val })
}
const holidays = [
  '2022-10-01',
  '2022-10-02',
  '2022-10-03',
  '2022-10-04',
  '2022-10-05',
  '2022-10-06',
  '2022-10-07',
]

const isHoliday = ({ dayjs }: DateCell) => {
  return holidays.includes(dayjs!.format('YYYY-MM-DD'))
}
</script>

<template>
  <Story title="Form/DatePicker" auto-props-disabled>
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
    <Variant title="Range">
      <el-date-picker
        v-model="date"
        :type="range"
        range-separator="To"
        :start-placeholder="
          range === 'daterange' ? 'Start date' : 'Start month'
        "
        :end-placeholder="range === 'daterange' ? 'End date' : 'End month'"
        :size="size"
      />
      <template #controls>
        <HstRadio v-model="size" :options="sizeList" title="Size" />
        <HstRadio v-model="range" title="Range" :options="rangeList" />
      </template>
    </Variant>
    <Variant title="Default Value">
      <el-date-picker
        v-model="date"
        :type="isRange ? 'daterange' : 'date'"
        placeholder="Pick a date"
        :default-value="new Date(2010, 9, 1)"
        :start-placeholder="range === 'daterange' ? 'Start date' : ''"
        :end-placeholder="range === 'daterange' ? 'End date' : ''"
      />
      <template #controls>
        <HstCheckbox v-model="isRange" title="Range" />
      </template>
    </Variant>
    <Variant title="Date Formats">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        :value-format="valueFormat"
        @change="handleChange"
      />
      <template #controls>
        <HstRadio
          v-model="valueFormat"
          title="Value format"
          :options="valueFormatList"
        />
      </template>
    </Variant>
    <Variant title="Set custom content of prefix">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        :prefix-icon="customPrefix"
      />
    </Variant>
    <Variant title="Custom content">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
        :default-value="new Date(2022, 9, 1)"
      >
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
          </div>
        </template>
      </el-date-picker>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic Usage
Basic date picker measured by 'day'.

The measurement is determined by the `type` attribute. You can enable quick options via `shortcuts` property. The disabled date is set by `disabledDate`, which is a function.

## Other measurements
You can choose week, month, year or multiple dates by extending the standard date picker component.

## Date range
Picking a date range is supported.

When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the unlink-panels attribute.
## Month range
Picking a month range is supported.

When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the `unlink-panels` attribute.

## Default Value
If user hasn't picked a date, shows today's calendar by default. You can use `default-value` to set another date. Its value should be parsable by `new Date()`.

If type is `daterange`, `default-value` sets the left side calendar.

## Date Formats
Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

## Default time for start date and end date
When picking a date range, you can assign the time part for start date and end date.

By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.

## Set custom content of prefix
The content of prefix can be customized.

Setting `prefix-icon` to component which you import form other .vue or generated by the render function.

## Custom content
The content of cell can be customized, in scoped-slot you can get the cell data.
</docs>

<style>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
