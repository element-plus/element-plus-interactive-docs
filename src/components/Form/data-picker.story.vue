<script setup lang="ts">
import { h, ref, shallowRef } from 'vue'
import type { RadioProps, dayjs } from 'element-plus'
import { logEvent } from 'histoire/client'

type HstControlOption = {
  label: string
  value: any
}[]

const size = ref<'' | 'large' | 'small'>('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const valueCustom = ref('2022-10-29')

const sizeValueOptions: Record<'label' | 'value', RadioProps['size']>[] = [
  {
    label: 'large',
    value: 'large',
  }, {
    label: 'default',
    value: 'default',
  }, {
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
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
const holidays = ref([
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
const holidaysOptions: HstControlOption = [
  {
    label: '2022-10-01 TO 2022-10-07',
    value: holidays,
  }, {
    label: '2022-10-08 TO 2022-10-14',
    value: holidays2,
  }, {
    label: '2022-10-15 TO 2022-10-21',
    value: holidays3,
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
const customPrefix = shallowRef({
  render() {
    return h('h', { innerHTML: 'pre', style: { padding: '0 2px 2px 0' } })
  },
})
const isHoliday = ({ dayjs }: { dayjs: dayjs.Dayjs }) => {
  return holidays.value.includes(dayjs.format('YYYY-MM-DD'))
}
const changeValue = (val: unknown) => {
  return logEvent('change', { value: val })
}
const changeValue2 = (val: unknown) => {
  return logEvent('calendar-change', { calendarValue: val })
}
const visibleChange = (val: unknown) => {
  return logEvent('visible-change', { visible: val })
}
</script>

<template>
  <Story title="Form/DatePicker">
    <Variant title="Enter Date">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            value-format="YYYY-MM-DD"
            :size="size"
            :disabled-date="disabledDate"
            @blur="logEvent('blur', $event)"
            @focus="logEvent('focus', $event)"
            @change="changeValue"
            @visible-change="visibleChange"
          />
        </div>
        <div class="block">
          <span class="demonstration">Picker with quick options</span>
          <el-date-picker
            v-model="value2" type="date" placeholder="Pick a day" :disabled-date="disabledDate"
            :shortcuts="shortcuts" :size="size" value-format="YYYY-MM-DD"
          />
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
        <HstText v-model="value1" title="first data input" />
        <HstText v-model="value2" title="second data input" />
      </template>
    </Variant>

    <Variant title="Other measurements">
      <div class="demo-date-picker">
        <div class="container">
          <div class="block">
            <span class="demonstration">Week</span>
            <el-date-picker v-model="value1" type="week" format="[Week] ww" placeholder="Pick a week" :size="size" />
          </div>
          <div class="block">
            <span class="demonstration">Month</span>
            <el-date-picker v-model="value2" type="month" placeholder="Pick a month" :size="size" />
          </div>
        </div>
        <div class="container">
          <div class="block">
            <span class="demonstration">Year</span>
            <el-date-picker v-model="value3" type="year" placeholder="Pick a year" :size="size" />
          </div>
          <div class="block">
            <span class="demonstration">Dates</span>
            <el-date-picker v-model="value4" type="dates" placeholder="Pick one or more dates" :size="size" />
          </div>
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Date Range">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :size="size"
            @calendar-change="changeValue2"
          />
        </div>
        <div class="block">
          <span class="demonstration">With quick options</span>
          <el-date-picker
            v-model="value2"
            type="daterange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcutsDataRange"
            :size="size"
            @calendar-change="changeValue2"
          />
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Month Range">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Default</span>
          <el-date-picker
            v-model="value1"
            type="monthrange"
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
            :size="size"
          />
        </div>
        <div class="block">
          <span class="demonstration">With quick options</span>
          <el-date-picker
            v-model="value2"
            type="monthrange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start month"
            end-placeholder="End month"
            :shortcuts="shortcutsMountRange"
            :size="size"
          />
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Default Value">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">Emits Date object</span>
          <div class="demonstration">
            Value: {{ value1 }}
          </div>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
            :size="size"
          />
        </div>
        <div class="block">
          <span class="demonstration">Use value-format</span>
          <div class="demonstration">
            Value：{{ value2 }}
          </div>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            :size="size"
          />
        </div>
        <div class="block">
          <span class="demonstration">Timestamp</span>
          <div class="demonstration">
            Value：{{ value3 }}
          </div>
          <el-date-picker
            v-model="value3"
            type="date"
            placeholder="Pick a Date"
            format="YYYY/MM/DD"
            value-format="x"
            :size="size"
          />
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Default time for start date and end date">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker">
        <div class="block">
          <p>Component value：{{ value1 }}</p>
          <el-date-picker
            v-model="value1"
            type="daterange"
            start-placeholder="Start date"
            end-placeholder="End date"
            :default-time="defaultTime"
            :size="size"
            @calendar-change="changeValue2"
          />
        </div>
      </div>

      <template #controls>
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Set custom content of prefix">
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">set prefix-icon</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            value-format="YYYY-MM-DD"
            :prefix-icon="customPrefix"
          />
        </div>
      </div>

      <template #controls>
        <HstText v-model="value1" title="data input" />
      </template>
    </Variant>

    <Variant title="Custom content">
      <div>
        <el-radio-group v-model="size" label="size control">
          <el-radio-button v-for="(item, index) in sizeValueOptions" :key="index" :label="item.label">
            {{ item.value }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="demo-date-picker" style="justify-content: center; margin-top: 20px;">
        The content of cell can be customized, in scoped-slot you can get the cell data.
        <el-date-picker
          v-model="valueCustom"
          type="date"
          style="margin-top: 20px;"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          :size="size"
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
        <HstButtonGroup v-model="size" title="Sizes" :options="sizeValueOptions" />
        <HstText v-model="valueCustom" title="data input" />
        <HstRadio v-model="holidays" title="holidays" :options="holidaysOptions" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
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
  border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container .block {
  border-right: none;
}

.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
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

<docs lang="md">
  # DatePicker

  Use Date Picker for date input.

  ## Enter Date

  Basic date picker measured by 'day'.

  The measurement is determined by the attribute. You can enable quick options via property. The disabled date is set by , which is a function. `type` `shortcuts` `disabledDate`

  ## Other measurements

  You can choose week, month, year or multiple dates by extending the standard date picker component.

  ## Other measurements

  You can choose week, month, year or multiple dates by extending the standard date picker component.

  ## Date Range

  Picking a date range is supported.

  When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the attribute. `unlink-panels`

  ## Month Range

  Picking a month range is supported.

  When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the attribute. `unlink-panels`

  ## Default Value

  If user hasn't picked a date, shows today's calendar by default. You can use to set another date. Its value should be parsable by . `default-valuenew Date()`

  If type is , sets the left side calendar. `daterangedefault-value`

  ## Date Formats

  Use to control displayed text's format in the input box. Use to control binding value's format.`format` `value-format`

  By default, the component accepts and emits a object. `Date`

  > **WARNING**
  > Pay attention to capitalization

  ## Default time for start date and end date

  When picking a date range, you can assign the time part for start date and end date.

  By default, the time part of start date and end date are both . Setting can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date. `00:00:00default-time`

  ## Set custom content of prefix

  The content of prefix can be customized.

  Setting to component which you import form other .vue or generated by the render function. `prefix-icon`

  ## Custom content

  The content of cell can be customized, in scoped-slot you can get the cell data.

  ## Localization

  The default locale of is English, if you need to use other languages, please check [Internationalization](https://element-plus.gitee.io/en-US/guide/i18n.html)

  Note, date time locale (month name, first day of the week ...) are also configured in localization.
</docs>
