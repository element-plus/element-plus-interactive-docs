<script setup lang="ts">
import { stateOptions } from './constants'
const basicData = reactive({
  active: 0,
  direction: 'horizontal',
  processStatus: 'process',
  finishStatus: 'finish',
  alignCenter: false,
  simple: false,
})

const basicDataTitles = reactive({
  step1: 'step 1',
  step2: 'step 2',
  step3: 'step 3',
})

const basicDatadescriptions = reactive({
  step1: '',
  step2: '',
  step3: '',
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
<\/script>

<el-steps
  v-model="active"${isAttribute(
    basicData.simple,
    'simple',
  )}${isAttribute(
    basicData.alignCenter && !basicData.simple,
    'align-center',
  )}${isAttribute(
    basicData.direction === 'vertical' && !basicData.simple,
    'direction="vertical"',
  )}${isAttribute(
    basicData.processStatus !== 'process',
    `process-status="${basicData.processStatus}"`,
  )}${isAttribute(
    basicData.finishStatus !== 'finish',
    `finish-status="${basicData.finishStatus}"`,
  )}
>
  <el-step
    title="${basicDataTitles.step1}"${isAttribute(
    Boolean(basicDatadescriptions.step1) && !basicData.simple,
    `  description="${basicDatadescriptions.step1}"`,
  )}
  />
  <el-step
    title="${basicDataTitles.step2}"${isAttribute(
    Boolean(basicDatadescriptions.step2) && !basicData.simple,
    `  description="${basicDatadescriptions.step2}"`,
  )}
  />
  <el-step
    title="${basicDataTitles.step3}"${isAttribute(
    Boolean(basicDatadescriptions.step3) && !basicData.simple,
    `  description="${basicDatadescriptions.step3}"`,
  )}
  />
</el-steps>`
})
</script>

<template>
  <Story
    title="Navigation/Steps"
    icon="fluent:arrow-step-in-right-16-regular"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <div :style="{ height: basicData.direction === 'vertical' ? '300px' : '' }">
        <el-steps
          :active="basicData.active"
          :direction="basicData.direction"
          :process-status="basicData.processStatus"
          :finish-status="basicData.finishStatus"
          :align-center="basicData.alignCenter"
          :simple="basicData.simple"
        >
          <el-step :title="basicDataTitles.step1" :description="basicDatadescriptions.step1" />
          <el-step :title="basicDataTitles.step2" :description="basicDatadescriptions.step2" />
          <el-step :title="basicDataTitles.step3" :description="basicDatadescriptions.step3" />
        </el-steps>
      </div>
      <template #controls>
        <HstInputNumber v-model="basicData.active" title="Active" :min="0" :max="3" />
        <HstCheckbox v-model="basicData.simple" title="Simple" />
        <HstCheckbox v-model="basicData.alignCenter" title="AlignCenter" :style="useElDisplay(!basicData.simple)" />
        <HstButtonGroup
          v-model="basicData.direction"
          title="Direction"
          :options="[{
            label: 'vertical',
            value: 'vertical',
          }, {
            label: 'horizontal',
            value: 'horizontal',
          }]"
          :style="useElDisplay(!basicData.simple)"
        />
        <HstSelect v-model="basicData.processStatus" title="ProcessStatus" :options="stateOptions" />
        <HstSelect v-model="basicData.finishStatus" title="finishStatus" :options="stateOptions" />
        <el-divider border-style="dotted" content-position="left">
          <span>title</span>
        </el-divider>
        <HstText v-model="basicDataTitles.step1" title="Step 1" />
        <HstText v-model="basicDataTitles.step2" title="Step 2" />
        <HstText v-model="basicDataTitles.step3" title="Step 3" />
        <div :style="useElDisplay(!basicData.simple)" style="flex-direction: column;">
          <el-divider border-style="dotted" content-position="left">
            <span>description</span>
          </el-divider>
          <HstText v-model="basicDatadescriptions.step1" title="Step 1" />
          <HstText v-model="basicDatadescriptions.step2" title="Step 2" />
          <HstText v-model="basicDatadescriptions.step3" title="Step 3" />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
