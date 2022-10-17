<script setup lang="ts">
import { h, ref, shallowRef } from 'vue'
import type { RadioProps } from 'element-plus'
import { logEvent } from 'histoire/client'
import type { DateCell } from 'element-plus/es/components/date-picker/src/date-picker.type'

const date = ref('')
const dateRange = ref('')
const dateRange2 = ref('')
const dateMonth = ref('')
const dateMonth2 = ref('')
const date2 = ref('')
const date3 = ref('')
const date4 = ref('')
const size = ref<'large' | 'default' | 'small'>('default')
const valueCustom = ref('2022-10-29')

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  },
})

const holidays1 = ref([
  '2022-10-01',
  '2022-10-02',
  '2022-10-03',
  '2022-10-04',
  '2022-10-05',
  '2022-10-06',
  '2022-10-07',
])
const holidays2 = ref([
  '2022-10-08',
  '2022-10-09',
  '2022-10-10',
  '2022-10-11',
  '2022-10-12',
  '2022-10-13',
  '2022-10-14',
])
const holidays3 = ([
  '2022-10-15',
  '2022-10-16',
  '2022-10-17',
  '2022-10-18',
  '2022-10-19',
  '2022-10-20',
  '2022-10-21',
])
const holidaysOptions: {
  label: string
  value: any
}[] = [
  {
    label: '2022-10-01 TO 2022-10-07',
    value: holidays1,
  }, {
    label: '2022-10-08 TO 2022-10-14',
    value: holidays2,
  }, {
    label: '2022-10-15 TO 2022-10-21',
    value: holidays3,
  },
]
const sizeList: Record<'label' | 'value', RadioProps['size']>[] = [
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
const shortcutsDataRange = [
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
const shortcutsMountRange = [
  {
    text: 'This month',
    value: [new Date(), new Date()],
  },
  {
    text: 'This year',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    },
  },
  {
    text: 'Last 6 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    },
  },
]
const holidays = [
  '2022-10-01',
  '2022-10-02',
  '2022-10-03',
  '2022-10-04',
  '2022-10-05',
  '2022-10-06',
  '2022-10-07',
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
const handleChange = (val: typeof date) => {
  logEvent('change', { date: val })
}
const calendarChange = (val: [Date, Date]) => {
  logEvent('calendar-change', { calendarValue: val })
}
const visibleChange = (val: boolean) => {
  logEvent('visible-change', { visible: val })
}
const isHoliday = ({ dayjs }: DateCell) => {
  return holidays.includes(dayjs!.format('YYYY-MM-DD'))
}
</script>

<template>
  <Story
    title="Form/DatePicker"
    icon="carbon:calendar"
    :layout="{ type: 'grid', width: 480 }"
  >
    <Variant title="Basic Usage">
      <div>
        <el-radio-group v-model="size" label="size control" style="margin-bottom: 20px;">
          <el-radio-button v-for="(item, index) in sizeList" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        value-format="YYYY-MM-DD"
        :disabled-date="disabledDate"
        :size="size"
        @blur="logEvent('blur', $event)"
        @focus="logEvent('focus', $event)"
        @change="handleChange"
        @visible-change="visibleChange"
      />
      <template #controls>
        <HstButtonGroup v-model="size" :options="sizeList" title="Size" />
        <HstText v-model="date" title="date input" />
      </template>
    </Variant>

    <Variant title="Quick options">
      <div class="block">
        <span class="demonstration">Picker with quick options</span>
        <el-date-picker
          v-model="date" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
          :shortcuts="shortcuts" format="YYYY/MM/DD" value-format="YYYY-MM-DD"
        />
      </div>

      <template #controls>
        <HstText v-model="date" title="date input" />
      </template>
    </Variant>

    <Variant title="Other measurements">
      <div class="demo-date-picker">
        <div class="container">
          <div class="block">
            <span class="demonstration">Week</span>
            <el-date-picker v-model="date" type="week" format="[Week] ww" placeholder="Pick a week" />
          </div>
          <div class="block">
            <span class="demonstration">Month</span>
            <el-date-picker v-model="date2" type="month" placeholder="Pick a month" />
          </div>
        </div>
        <div class="container">
          <div class="block">
            <span class="demonstration">Year</span>
            <el-date-picker v-model="date3" type="year" placeholder="Pick a year" />
          </div>
          <div class="block">
            <span class="demonstration">Dates</span>
            <el-date-picker v-model="date4" type="dates" placeholder="Pick one or more dates" />
          </div>
        </div>
      </div>
    </Variant>

    <Variant title="Date Range">
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            @calendar-change="calendarChange"
          />
        </div>
        <div class="block">
          <span class="demonstration">With quick options</span>
          <el-date-picker
            v-model="dateRange2"
            type="daterange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcutsDataRange"
            @calendar-change="calendarChange"
          />
        </div>
      </div>
    </Variant>

    <Variant title="Month Range">
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="dateMonth"
            type="monthrange"
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
          />
        </div>
        <div class="block">
          <span class="demonstration">With quick options</span>
          <el-date-picker
            v-model="dateMonth2"
            type="monthrange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
            :shortcuts="shortcutsMountRange"
          />
        </div>
      </div>
    </Variant>

    <Variant title="Default Value and different format values">
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Emits Date object</span>
          <div class="demonstration">
            Value: {{ date }}
          </div>
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
          />
        </div>
        <div class="block">
          <span class="demonstration">Use value-format</span>
          <div class="demonstration">
            Value：{{ date2 }}
          </div>
          <el-date-picker
            v-model="date2"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </div>
        <div class="block">
          <span class="demonstration">Timestamp</span>
          <div class="demonstration">
            Value：{{ date3 }}
          </div>
          <el-date-picker
            v-model="date3"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
            value-format="x"
          />
        </div>
      </div>
    </Variant>

    <Variant title="Set custom content of prefix">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
        format="YYYY/MM/DD"
        :prefix-icon="customPrefix"
      />
    </Variant>

    <Variant title="Custom content">
      <div class="demo-date-picker" style="justify-content: center; margin-top: 20px;">
        The content of cell can be customized, in scoped-slot you can get the cell data.
        <el-date-picker
          v-model="valueCustom"
          type="date"
          style="margin-top: 20px;"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        >
          <template #default="cell">
            <div class="cell" :class="{ current: cell.isCurrent }">
              <span class="text">{{ cell.text }}</span>
              <span v-if="isHoliday(cell)" class="holiday" />
            </div>
          </template>
        </el-date-picker>
      </div>

      <template #controls>
        <HstText v-model="valueCustom" title="date input" />
        <HstRadio v-model="holidays" title="holidays" :options="holidaysOptions" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# DatePicker

Use Date Picker for date input.

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

> **WARNING**
> Pay attention to capitalization

## Default time for start date and end date

When picking a date range, you can assign the time part for start date and end date.

By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.

## Set custom content of prefix

The content of prefix can be customized.

Setting `prefix-icon` to component which you import form other .vue or generated by the render function.

## Custom content

The content of cell can be customized, in scoped-slot you can get the cell data.

## Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](https://element-plus.gitee.io/en-US/guide/i18n.html)

Note, date time locale (month name, first day of the week ...) are also configured in localization.
</docs>

<style>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.demo-date-picker .container {
  flex: 1;
}

.demo-date-picker .container .block {
  border-right: none;
}

.demo-date-picker .container:last-child {
  border-right: none;
}

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
