<script setup lang="ts">
import { placementOptions } from './constants'
import sizeOptions from '@/constants/sizeOptions'
import { isAttribute } from '@/utils'
const basicData = reactive({
  value: 0,
  max: 10,
  min: 0,
  step: 1,
  disabled: false,
  showInputControls: true,
  showInput: false,
  size: 'default',
  inputSize: 'default',
  showStops: false,
  showTooltip: true,
  vertical: false,
  height: 200,
  debounce: 300,
  placement: 'top',
  range: false,
})

const basicSource = computed(() => {
  return `<script setup lang="ts">
import { ref } from 'vue'
const value = ref(${basicData.range ? '[0, 5]' : 0})
<\/script>

<el-slider
  v-model="value"${isAttribute(
    basicData.max !== 100,
    `:max="${basicData.max}"`,
  )}${isAttribute(
    basicData.min !== 0,
    `:min="${basicData.min}"`,
  )}${isAttribute(
    basicData.step !== 1,
     `step="${basicData.step}"`,
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )}${isAttribute(
    !basicData.showInputControls && basicData.showInput,
    ':show-input-controls="false"',
  )}${isAttribute(
    basicData.showInput && !basicData.range,
    'show-input',
  )}${isAttribute(
    basicData.size !== 'default',
    `size="${basicData.size}"`,
  )}${isAttribute(
    basicData.inputSize !== 'default',
    `input-size="${basicData.inputSize}"`,
  )}${isAttribute(
    basicData.showStops,
    `:show-stops="${basicData.showStops}"`,
  )}${isAttribute(
    !basicData.showTooltip,
    ':show-tooltip="false"',
  )}${isAttribute(
    basicData.vertical,
    'vertical',
  )}${isAttribute(
    Boolean(basicData.height) && basicData.vertical,
    `:height="${basicData.height}"`,
  )}${isAttribute(
    basicData.debounce !== 300,
    `:debounce="${basicData.debounce}"`,
  )}${isAttribute(
    basicData.placement !== 'top',
    `placement="${basicData.placement}"`,
  )}${isAttribute(
    basicData.range,
    'range',
  )}
>`
})
watch(
  () => basicData.step,
  (val) => {
    if (val < 1)
      basicData.step = 1
  },
)

watch(
  () => basicData.range,
  (val) => {
    if (val)
      basicData.value = [basicData.min + 1, basicData.max - 1] as any
  },
)
</script>

<template>
  <Story
    title="Form/Slider"
    icon="uil:slider-h"
    :layout="{
      type: 'grid',
      width: basicData.showInput ? 400 : 320,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <div class="slider-container">
        <el-slider
          v-model="basicData.value"
          :max="basicData.max"
          :min="basicData.min"
          :disabled="basicData.disabled"
          :show-input-controls="basicData.showInputControls"
          :show-input="basicData.showInput"
          :step="basicData.step"
          :size="basicData.size"
          :input-size="basicData.inputSize"
          :show-stops="basicData.showStops"
          :show-tooltip="basicData.showTooltip"
          :vertical="basicData.vertical"
          :height="`${basicData.height}px`"
          :debounce="basicData.debounce"
          :placement="basicData.placement"
          :range="basicData.range"
        />
      </div>
      <template #controls>
        <HstNumber v-model="basicData.max" title="Max" />
        <HstNumber v-model="basicData.min" title="Min" />
        <HstCheckbox v-model="basicData.range" title="Range" />
        <HstCheckbox v-model="basicData.showInput" title="Show Input" :style="{ display: basicData.range ? 'none' : 'flex' }" />
        <HstCheckbox v-if="basicData.showInput" v-model="basicData.showInputControls" title="Show World Limit" :style="{ display: basicData.range ? 'none' : 'flex' }" />
        <HstButtonGroup v-if="basicData.showInput" v-model="basicData.inputSize" title="input-size" :options="sizeOptions" />
        <HstCheckbox v-model="basicData.disabled" title="Disabled" />
        <HstNumber v-model="basicData.step" title="Step" />
        <HstCheckbox v-model="basicData.showStops" title="Show Stops" />
        <HstCheckbox v-model="basicData.vertical" title="Vertical" />
        <HstNumber v-if="basicData.vertical" v-model="basicData.height" title="Height" />
        <HstButtonGroup v-if="!basicData.vertical" v-model="basicData.size" title="Size" :options="sizeOptions" />
        <HstCheckbox v-model="basicData.showTooltip" title="Show Tooltip" />
        <HstSelect v-if="basicData.showTooltip" v-model="basicData.placement" title="Placement" :options="placementOptions" />
        <HstNumber v-model="basicData.debounce" title="Debounce" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.slider-container {
  margin: 10px 20px;
}
</style>
