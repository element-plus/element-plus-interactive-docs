<script setup lang="ts">
import typeList from '@constants/typeOptions'
import { placementList, sizeList } from './constants'
import { isAttribute } from '@/utils'

const activities = ref([
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
])
const basicPropsData = reactive({
  hideTimestamp: false,
  center: false,
  placement: 'bottom',
  type: '',
  color: '',
  size: 'normal',
  hollow: false,
})
const basicSource = computed(() => {
  return `<script setup lang="ts">
  const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
<\/script>

<el-timeline>
  <el-timeline-item
    v-for="activity in activities"
    :key="activity.timestamp"
    :timestamp="activity.timestamp"${isAttribute(
basicPropsData.hideTimestamp,
'  hide-timestamp',
)}${isAttribute(
basicPropsData.center,
 '  center',
)}${isAttribute(
basicPropsData.placement === 'top',
'  placement="top"',
)}${isAttribute(
basicPropsData.type !== '',
`  type="${basicPropsData.type}"`,
)}${isAttribute(
Boolean(basicPropsData.color),
`  color=${basicPropsData.color}`,
)}${isAttribute(
basicPropsData.size !== 'normal',
`  size=${basicPropsData.size}`,
)}${isAttribute(
basicPropsData.hollow,
'  hollow',
)}
  >
    {{ activity.content }}
  </el-timeline-item>
</el-timeline>`
})
</script>

<template>
  <Story title="Data/Timeline" icon="mdi:timeline-clock-outline">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
          :hide-timestamp="basicPropsData.hideTimestamp"
          :center="basicPropsData.center"
          :placement="basicPropsData.placement"
          :type="basicPropsData.type"
          :color="basicPropsData.color"
          :size="basicPropsData.size"
          :hollow="basicPropsData.hollow"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
      <template #controls>
        <HstCheckbox v-model="basicPropsData.hideTimestamp" title="hide-timestamp" />
        <HstCheckbox v-model="basicPropsData.center" title="Center" />
        <HstButtonGroup
          v-model="basicPropsData.placement"
          title="Placement"
          :options="placementList"
        />
        <HstButtonGroup
          v-model="basicPropsData.size"
          title="Size"
          :options="sizeList"
        />
        <HstColor v-model="basicPropsData.color" title="Color" />
        <HstCheckbox v-model="basicPropsData.hollow" title="Hollow" />
        <HstRadio
          v-model="basicPropsData.type"
          title="Type"
          :options="typeList"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
