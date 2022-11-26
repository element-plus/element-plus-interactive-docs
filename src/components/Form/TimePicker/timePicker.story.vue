<script setup lang="ts">
import sizeOptions from '@/constants/sizeOptions'
import { isAttribute } from '@/utils'

// Basic Usage
const basicData = reactive({
  value: '',
  arrowControl: false,
  readonly: false,
  editable: true,
  clearable: true,
  disabled: false,
  placeholder: 'Arbitrary time',
  size: 'default',
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>

<el-time-picker
  v-model="value"${isAttribute(
    basicData.arrowControl,
    'arrow-control',
  )}${isAttribute(
    basicData.readonly,
    'readonly',
    )}${isAttribute(
    !basicData.editable,
    ':editable="false"',
  )}${isAttribute(
    !basicData.clearable,
     ':clearable="true"',
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )}${isAttribute(
    basicData.placeholder !== '',
    `placeholder="${basicData.placeholder}"`,
  )}${isAttribute(
    basicData.size !== 'default',
    `size="${basicData.size}"`,
  )}
/>
`
})

// Limit the time range
const limitRangeData = reactive({
  value: '',
})

const makeRange = (rangeList: [number, number]) => {
  const result: number[] = []
  const maxNum = rangeList[0] > rangeList[1] ? rangeList[0] : rangeList[1]
  const minNum = rangeList[0] > rangeList[1] ? rangeList[1] : rangeList[0]
  for (let i = minNum; i <= maxNum; i++)
    result.push(i)

  return result
}

const disabledHoursRange = ref<[number, number]>([0, 6])
const disabledHours = () => makeRange(disabledHoursRange.value)

const disabledMinutesRange = ref<[number, number]>([30, 45])
const disabledMinutes = () => makeRange(disabledMinutesRange.value)

const disabledSecondsRange = ref<[number, number]>([22, 55])
const disabledSeconds = () => makeRange(disabledSecondsRange.value)

const limitRangeSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const disabledHours = () => [${makeRange(disabledHoursRange.value)}]
const disabledMinutes = () => [${makeRange(disabledMinutesRange.value)}]
const disabledSeconds = () => [${makeRange(disabledSecondsRange.value)}]
<\/script>

<el-time-picker
  v-model="value"
  :disabled-hours="disabledHours"
  :disabled-minutes="disabledMinutes"
  :disabled-seconds="disabledSeconds"
/>`
})

// Arbitrary time range
const arbitraryRangeData = reactive({
  value: '',
  separator: 'To',
  startPlaceholder: 'Start time',
  endPlaceholder: 'End time',
  arrowControl: false,
})

const arbitraryRangeSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
<\/script>

<el-time-picker
  v-model="value"
  is-range
  range-separator="${arbitraryRangeData.separator}"
  start-placeholder="${arbitraryRangeData.startPlaceholder}"
  end-placeholder="${arbitraryRangeData.endPlaceholder}"${isAttribute(
    arbitraryRangeData.arrowControl,
    'arrow-control',
  )}
/>`
})
</script>

<template>
  <Story
    title="Form/TimePicker"
    icon="fluent:time-picker-20-regular"
    :layout="{
      type: 'grid',
      width: 500,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-time-picker
        v-if="basicData.arrowControl"
        v-model="basicData.value"
        :placeholder="basicData.placeholder"
        :clearable="basicData.clearable"
        :readonly="basicData.readonly"
        :disabled="basicData.disabled"
        :editable="basicData.editable"
        :size="basicData.size"
        arrow-control
      />
      <el-time-picker
        v-else
        v-model="basicData.value"
        :placeholder="basicData.placeholder"
        :clearable="basicData.clearable"
        :readonly="basicData.readonly"
        :disabled="basicData.disabled"
        :editable="basicData.editable"
        :size="basicData.size"
      />
      <template #controls>
        <HstText
          v-model="basicData.placeholder"
          title="Placeholder"
        />
        <HstButtonGroup
          v-model="basicData.size"
          title="Size"
          :options="sizeOptions"
        />
        <HstCheckbox
          v-model="basicData.arrowControl"
          title="Arrow Control"
        />
        <HstCheckbox
          v-model="basicData.readonly"
          title="Readonly"
        />
        <HstCheckbox
          v-model="basicData.editable"
          title="Editable"
        />
        <HstCheckbox
          v-model="basicData.clearable"
          title="Clearable"
        />
        <HstCheckbox
          v-model="basicData.disabled"
          title="Disabled"
        />
      </template>
    </Variant>
    <Variant
      title="Limit the time range"
      :source="limitRangeSource"
    >
      <el-time-picker
        v-model="limitRangeData.value"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        placeholder="Arbitrary time"
      />
      <template #controls>
        <HstRange v-model="disabledHoursRange" title="DisabledHours" :min="0" :max="23" />
        <HstRange v-model="disabledMinutesRange" title="DisabledMinutes" :min="0" :max="59" />
        <HstRange v-model="disabledSecondsRange" title="DisabledSeconds" :min="0" :max="59" />
      </template>
    </Variant>
    <Variant
      title="Arbitrary time range"
      :source="arbitraryRangeSource"
    >
      <el-time-picker
        v-if="arbitraryRangeData.arrowControl"
        v-model="arbitraryRangeData.value"
        is-range
        :range-separator="arbitraryRangeData.separator"
        :start-placeholder="arbitraryRangeData.startPlaceholder"
        :end-placeholder="arbitraryRangeData.endPlaceholder"
        arrow-control
      />
      <el-time-picker
        v-else
        v-model="arbitraryRangeData.value"
        is-range
        :range-separator="arbitraryRangeData.separator"
        :start-placeholder="arbitraryRangeData.startPlaceholder"
        :end-placeholder="arbitraryRangeData.endPlaceholder"
      />
    </Variant>
    <template #controls>
      <HstText
        v-model="arbitraryRangeData.separator"
        title="Separator"
      />
      <HstText
        v-model="arbitraryRangeData.startPlaceholder"
        title="Start Placeholder"
      />
      <HstText
        v-model="arbitraryRangeData.endPlaceholder"
        title="End Placeholder"
      />
      <HstCheckbox
        v-model="arbitraryRangeData.arrowControl"
        title="Arrow Control"
      />
    </template>
  </Story>
</template>

<style scoped>
</style>
