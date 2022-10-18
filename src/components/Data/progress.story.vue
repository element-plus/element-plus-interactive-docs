<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Check, Minus, Plus } from '@element-plus/icons-vue'
import type { ProgressProps } from 'element-plus'

const currentPercentage = ref(50)
const currentInside = ref(true)
const progressPercentageList: { label: string; value: string }[] = [
  {
    label: 'default',
    value: '50',
  },
  {
    label: 'Full',
    value: '100',
  },
]

const currentStatus = ref('')
const progressStatusList: { label: string; value: ProgressProps['status'] }[] = [
  {
    label: 'default',
    value: '',
  },
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'exception',
    value: 'exception',
  },
]

const progressType = ref('line')
const progressTypeList: { label: string; value: string }[] = [
  {
    label: 'default',
    value: 'line',
  },
  {
    label: 'circle',
    value: 'circle',
  },
  {
    label: 'dashboard',
    value: 'dashboard',
  },
]

const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', currentPercentage: 20 },
  { color: '#e6a23c', currentPercentage: 40 },
  { color: '#5cb87a', currentPercentage: 60 },
  { color: '#1989fa', currentPercentage: 80 },
  { color: '#6f7ad3', currentPercentage: 100 },
]

const customColorMethod = (currentPercentage: number) => {
  if (currentPercentage < 30)
    return '#909399'

  if (currentPercentage < 70)
    return '#e6a23c'
  return '#67c23a'
}
const increase = () => {
  currentPercentage.value += 10
  if (currentPercentage.value > 100)
    currentPercentage.value = 100
}
const decrease = () => {
  currentPercentage.value -= 10
  if (currentPercentage.value < 0)
    currentPercentage.value = 0
}

const percentage2 = ref(0)

onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})

const indeterminate = ref(true)
</script>

<template>
  <Story title="Data/Progress" icon="carbon:progress-bar-round">
    <Variant title="Linear progress bar">
      <el-progress :percentage="currentPercentage" :status="currentStatus" />
      <template #controls>
        <HstRadio v-model="currentPercentage" title="Progress percentage" :options="progressPercentageList" />
        <HstRadio v-model="currentStatus" title="Progress Status" :options="progressStatusList" />
      </template>
    </Variant>
    <Variant title="Internal percentage">
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="26" :percentage="70" :status="currentStatus" />
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="24" :percentage="100" :status="currentStatus" />
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="22" :percentage="80" :status="currentStatus" />
      <el-progress style="margin-bottom: 15px;" :text-inside="currentInside" :stroke-width="20" :percentage="50" :status="currentStatus" />
      <template #controls>
        <HstCheckbox v-model="currentInside" title="Internal" />
        <HstRadio v-model="currentStatus" title="Progress Status" :options="progressStatusList" />
      </template>
    </Variant>
    <Variant title="Custom color">
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColor" />
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColorMethod" />
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColors" />
      <el-progress style="margin-bottom: 15px;" :percentage="currentPercentage" :color="customColors" />
      <div>
        <el-button-group>
          <el-button :icon="Minus" @click="decrease" />
          <el-button :icon="Plus" @click="increase" />
        </el-button-group>
      </div>
    </Variant>
    <Variant title="Circular progress bar" class="demo-type">
      <el-progress style="margin-bottom: 15px;" :percentage="0" :type="progressType" />
      <el-progress style="margin-bottom: 15px;" :percentage="25" :type="progressType" />
      <el-progress style="margin-bottom: 15px;" :percentage="100" :type="progressType" />
      <el-progress style="margin-bottom: 15px;" :percentage="70" :type="progressType" />
      <el-progress style="margin-bottom: 15px;" :percentage="50" :type="progressType" />
      <template #controls>
        <HstRadio v-model="progressType" title="Progress type" :options="progressTypeList" />
      </template>
    </Variant>
    <Variant title="Dashboard progress bar" class="demo-type">
      <el-progress type="dashboard" :percentage="currentPercentage" :color="customColors" />
      <el-progress type="dashboard" :percentage="percentage2" :color="customColors" />
      <div>
        <el-button-group>
          <el-button :icon="Minus" @click="decrease" />
          <el-button :icon="Plus" @click="increase" />
        </el-button-group>
      </div>
    </Variant>
    <Variant title="Customized content" class="demo-type">
      <el-progress :percentage="50">
        <el-button text>
          Content
        </el-button>
      </el-progress>
      <el-progress
        :text-inside="currentInside"
        :stroke-width="20"
        :percentage="50"
        status="exception"
      >
        <span>Content</span>
      </el-progress>
      <el-progress type="circle" :percentage="100" status="success">
        <el-button type="success" :icon="Check" circle />
      </el-progress>
      <el-progress type="dashboard" :percentage="80">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">Progressing</span>
        </template>
      </el-progress>
    </Variant>
    <Variant title="Indeterminate progress" class="demo-type">
      <el-progress :percentage="50" :indeterminate="indeterminate" />
      <el-progress :percentage="100" :indeterminate="indeterminate" />
      <el-progress
        :percentage="100"
        status="success"
        :indeterminate="indeterminate"
        :duration="5"
      />
      <el-progress
        :percentage="100"
        status="warning"
        :indeterminate="indeterminate"
        :duration="1"
      />
      <el-progress :percentage="50" status="exception" :indeterminate="indeterminate" />
    </Variant>
    <template #controls>
      <HstCheckbox v-model="indeterminate" title="indeterminate" />
    </template>
  </Story>
</template>

<docs lang="md">
  ## Linear progress bar

  Use percentage attribute to set the percentage. It's required and must be between 0-100. You can custom text format by setting format.

  ## Internal percentage

  In this case the percentage takes no additional space.

  stroke-width attribute decides the width of progress bar, and use text-inside attribute to put description inside the progress bar.

  ## Custom color

  You can use color attr to set the progress bar color. it accepts color string, function, or array.

  ## Circular progress bar

  You can specify type attribute to circle to use circular progress bar, and use width attribute to change the size of circle.

  ## Dashboard progress bar

  You also can specify type attribute to dashboard to use dashboard progress bar.

  ## Customized content

  Use default slot to add customized content.

  ## Indeterminate progress

  Use indeterminate attribute to set indeterminate progress, with duration to control the animation duration.
</docs>

<style scoped>
.demo-type {
  display: flex;
  justify-content: space-around;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
