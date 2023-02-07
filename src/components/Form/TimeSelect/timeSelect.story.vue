<script setup lang="ts">
import type { ISelectProps } from 'element-plus'
import { Link } from '@element-plus/icons-vue'
import sizeOptions from '@/constants/sizeOptions'

// Basic Usage
const basicData = reactive({
  value: '',
  start: '09:00',
  step: '00:30',
  end: '18:00',
  placeholder: 'Select time',
  disabled: false,
  editable: true,
  clearable: true,
  size: 'default' as ISelectProps['size'],
})

const basicSource = computed(() => {
  return `<el-time-select
  v-model="value"${isAttribute(
    basicData.start !== '09:00',
    `start="${basicData.start}"`,
  )}${isAttribute(
    basicData.step !== '00:30',
    `step="${basicData.step}"`,
  )}${isAttribute(
    basicData.end !== '18:00',
    `end="${basicData.end}"`,
  )}${isAttribute(
    basicData.placeholder !== '',
    `placeholder="${basicData.placeholder}"`,
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )}${isAttribute(
    !basicData.editable,
    ':editable="false"',
  )}${isAttribute(
    !basicData.clearable,
    ':clearable="false"',
  )}${isAttribute(
    basicData.size !== 'default',
    `size="${basicData.size}"`,
  )}
/>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>
`
})

// Time Formats
const timeFormatsData = reactive({
  value: '',
  format: 'hh:mm A',
})

const timeFormatsSource = computed(() => {
  return `<el-time-select
  v-model="value"
  format="${timeFormatsData.format}"
/>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>
`
})

// Fixed time range
const fixedTimeData = reactive({
  value: 'startTime',
  endTime: '',
  startTime: '',
})

const fixedTimeSource = computed(() => {
  return `<template>
  <el-time-select
    v-model="fixedTimeData.startTime"
    :max-time="fixedTimeData.endTime"
    placeholder="Start time"
    start="08:30"
    step="00:15"
    end="18:30"
  />
  <el-time-select
    v-model="fixedTimeData.endTime"
    :min-time="fixedTimeData.startTime"
    placeholder="End time"
    start="08:30"
    step="00:15"
    end="18:30"
  />
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  const basicData = reactive({
    endTime: '',
    startTime: '',
  })
<\/script>
`
})
</script>

<!-- icon from https://icones.js.org/collection/all?s=timeSelect -->
<template>
  <Story
    title="Form/TimeSelect"
    icon="fad:timeselect"
    :layout="{
      type: 'grid',
      width: 400,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-time-select
        v-model="basicData.value"
        :start="basicData.start"
        :step="basicData.step"
        :end="basicData.end"
        :placeholder="basicData.placeholder"
        :disabled="basicData.disabled"
        :editable="basicData.editable"
        :clearable="basicData.clearable"
        :size="basicData.size"
      />
      <template #controls>
        <HstText
          v-model="basicData.start"
          title="Start"
        />
        <HstText
          v-model="basicData.step"
          title="Step"
        />
        <HstText
          v-model="basicData.end"
          title="End"
        />
        <HstText
          v-model="basicData.placeholder"
          title="Placeholder"
        />
        <HstButtonGroup v-model="basicData.size" :options="sizeOptions" title="Size" />
        <HstCheckbox v-model="basicData.disabled" title="Disabled" />
        <HstCheckbox v-model="basicData.editable" title="Editable" />
        <HstCheckbox v-model="basicData.clearable" title="Clearable" />
      </template>
    </Variant>
    <Variant
      title="Time Formats"
      :source="timeFormatsSource"
    >
      <el-time-select
        v-model="timeFormatsData.value"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="Select time"
        :format="timeFormatsData.format"
      />
      <template #controls>
        <HstText
          v-model="timeFormatsData.format"
          title="Format"
        />
        <div class="htw-p-2 tips">
          Use format to control format of time(hours and minutes).
          Check the list
          <el-link type="primary" target="_blank" href="https://day.js.org/docs/zh-CN/display/format">
            here
            <template #icon>
              <link>
            </template>
          </el-link>
          of all available formats of Day.js.
        </div>
      </template>
    </Variant>
    <Variant
      title="Fixed time range"
      :source="fixedTimeSource"
    >
      <div class="demo-time-range">
        <el-time-select
          v-model="fixedTimeData.startTime"
          :max-time="fixedTimeData.endTime"
          class="mr-4"
          placeholder="Start time"
          start="08:30"
          step="00:15"
          end="18:30"
        />
        <el-time-select
          v-model="fixedTimeData.endTime"
          :min-time="fixedTimeData.startTime"
          placeholder="End time"
          start="08:30"
          step="00:15"
          end="18:30"
        />
      </div>
      <template #controls />
    </Variant>
  </Story>
</template>

<style scoped>
.demo-time-range .el-select{
  width: 160px;
}
.demo-time-range .el-select:first-child{
  margin-right: 6px;
}
.tips{
  color: #606266;
  font-size: 12px;
  margin-top: 10px;
}
</style>
