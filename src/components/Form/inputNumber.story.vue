<script setup lang="ts">
import type { InputNumberProps } from 'element-plus'
import { logEvent } from 'histoire/client'

import { ref } from 'vue'
const handleChange = (currentNum: number, oldNum: number) => logEvent('Change', { currentNum, oldNum })

const numBasic = ref(1)
const minBasic = ref(1)
const maxBasic = ref(10)
const numDisabled = ref(1)
const isDisabled = ref(1)
const numSteps = ref(1)
const numStep = ref(2)
const numStepsStrictly = ref(1)
const numStepStrictly = ref(true)
const numPrecision = ref(1)
const precision = ref(2)
const numSize = ref(1)
const size = ref('large')
const sizeList = ['large', 'default', 'small']
const numControls = ref(1)
const controlsPosition = ref('right')
const controlsPositionList = ['right']
</script>

<template>
  <Story title="Form/InputNumber">
    <Variant title="Basic Usage">
      <el-input-number v-model="numBasic" :min="minBasic" :max="maxBasic" @change="handleChange" />
      <template #controls>
        <HstText
          v-model="minBasic"
          title="min"
        />
        <HstText
          v-model="maxBasic"
          title="max"
        />
      </template>
    </Variant>
    <Variant title="Disabled">
      <el-input-number v-model="numDisabled" :disabled="isDisabled" />
      <template #controls>
        <HstCheckbox
          v-model="isDisabled"
          title="disabled"
        />
      </template>
    </Variant>
    <Variant title="Steps">
      <el-input-number v-model="numSteps" :step="numStep" />
      <template #controls>
        <HstText
          v-model="numStep"
          title="step"
        />
      </template>
    </Variant>
    <Variant title="Step Strictly">
      <el-input-number v-model="numStepsStrictly" :step="2" :step-strictly="numStepStrictly" />
      <template #controls>
        <HstCheckbox
          v-model="numStepStrictly"
          title="step-strictly"
        />
      </template>
    </Variant>
    <Variant title="Precision">
      <el-input-number v-model="numPrecision" :precision="precision" :step="0.1" :max="10" />
      <template #controls>
        <HstText
          v-model="precision"
          title="precision"
        />
      </template>
    </Variant>
    <Variant title="Size">
      <el-input-number v-model="numSize" :size="size" />
      <template #controls>
        <HstRadio
          v-model="size"
          title="size"
          :options="sizeList"
        />
      </template>
    </Variant>
    <Variant title="Controls Position">
      <el-space direction="vertical">
        <el-input-number
          v-model="numControls"
          :min="1"
          :max="10"
          :controls-position="controlsPosition"
          controls
          size="large"
          @change="handleChange"
        />

        <el-input-number
          v-model="numControls"
          class="mx-4"
          :min="1"
          :max="10"
          controls
          :controls-position="controlsPosition"
          @change="handleChange"
        />

        <el-input-number
          v-model="numControls"
          :min="1"
          :max="10"
          size="small"
          :controls-position="controlsPosition"
          @change="handleChange"
        />
      </el-space>
      <template #controls>
        <HstRadio
          v-model="controlsPosition"
          title="controls-position"
          :options="controlsPositionList"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage
Bind a variable to v-model in `<el-input-number>` element and you are set.

## Disabled
The `disabled` attribute accepts a `boolean`, and if the value is `true`, the component is disabled. If you just need to control the value within a range, you can add `min` attribute to set the minimum value and `max` to set the maximum value. By default, the minimum value is `0`.
## Steps
Allows you to define incremental steps.
Add `step` attribute to set the step.
## Step strictly
The `step-strictly` attribute accepts a `boolean`. if this attribute is `true`, input value can only be multiple of step.
## Precision
Add `precision` attribute to set the precision of input value.
## Size
Use attribute `size` to set additional sizes with `large` or `small`.
## Controls Position
Set `controls-position` to decide the position of control buttons.
</docs>

<style>
</style>
