<script setup lang="ts">
// import type { TimeSelectProps } from 'element-plus'
// Basic Usage
const basicData = reactive({
  value: '',
  start: '08:30',
  step: '00:15',
  end: '18:30',
  placeholder: 'Select time',
  disabled: false,
  editable: true,
  clearable: true,
})
const size = ref<'large' | 'default' | 'small'>('default')
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

const basicSource = computed(() => {
  return `<template>
  <el-time-select
    v-model="value"
    start="${basicData.start}"
    step="${basicData.step}"
    end="${basicData.end}"
    placeholder="${basicData.placeholder}"
    disabled="${basicData.disabled}"
    editable="${basicData.editable}"
    clearable="${basicData.clearable}"
    size="${size.value}"
  />
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  const basicData = reactive({
    value: '',
    start: '08:30',
    step: '00:15',
    end: '18:30',
    placeholder: 'Select time',
    disabled: false,
    editable: true,
    clearable: true,
  })
  const size = ref<'large' | 'default' | 'small'>('default')
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
<\/script>
`
})

// Time Formats
const timeFormatsData = reactive({
  value: '',
  format: 'hh:mm A',
})

const timeFormatsSource = computed(() => {
  return `
  <template>
    <el-time-select
      v-model="value"
      start="08:30"
      step="00:15"
      end="18:30"
      placeholder="Select time"
      format="${timeFormatsData.format}"
    />
  </template>
  <script setup lang="ts">
    import { reactive } from 'vue'
    const basicData = reactive({
      value: '',
      format: 'hh:mm A',
    })
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
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  const basicData = reactive({
    value: 'startTime',
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
        :size="size"
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
        <HstRadio v-model="size" :options="sizeList" title="Size" />
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
        <div class="htw-p-2">
          Use format to control format of time(hours and minutes).
          Check the list
          <el-link type="primary" target="_blank" href="https://day.js.org/docs/zh-CN/display/format">
            here
            <template #icon>
              <el-icon :size="12" color="--el-color-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" /></g></svg>
              </el-icon>
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
</style>
