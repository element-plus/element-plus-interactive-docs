<script setup lang="ts">
import { ref } from 'vue'
import { ChatDotRound, ChatLineRound, ChatRound } from '@element-plus/icons-vue'
import type { RateProps } from 'element-plus'
const currentRate = ref<RateProps['modelValue']>(0)
const maxRate = ref<RateProps['max']>(5)
const colors = ['#409eff', '#67c23a', '#FF9900']
const sizeValue = ref<RateProps['size']>('small')
const sizeValueOptions: { label: string; 'value': RateProps['size'] }[] = [
  {
    label: 'small',
    value: 'small',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'large',
    value: 'large',
  },
]
const allowedHalf = ref(true)
const auxiliaryText = ref<RateProps['texts']>(['oops', 'disappointed', 'normal', 'good', 'great'])
const showText = ref(true)
const disabled = ref(true)
const showScore = ref(true)
const clearable = ref<RateProps['clearable']>(true)
const icons = [ChatRound, ChatLineRound, ChatDotRound]
</script>

<template>
  <Story title="Form/Rate" icon="material-symbols:star-rate-half-rounded">
    <Variant title="Basic Usage">
      <!-- <el-rate v-model="rate" /> -->
      <el-rate v-model="currentRate" :max="maxRate" />
      <template #controls>
        <HstSlider v-model="currentRate" title="Rate" :max="maxRate" />
      </template>
    </Variant>

    <Variant title="Sizes">
      <el-rate v-model="currentRate" :size="sizeValue" />
      <template #controls>
        <HstRadio v-model="sizeValue" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Half-selection allowed">
      <el-rate v-model="currentRate" :allow-half="allowedHalf" />
      <template #controls>
        <HstCheckbox v-model="allowedHalf" title="allowedHalf" />
      </template>
    </Variant>

    <Variant title="Auxiliary text">
      <el-rate v-model="currentRate" :texts="auxiliaryText" :show-text="showText" />
      <template #controls>
        <HstCheckbox v-model="showText" title="showText" />
      </template>
    </Variant>

    <Variant title="Clearable">
      <el-rate v-model="currentRate" :clearable="clearable" />
      <template #controls>
        <HstCheckbox v-model="clearable" title="Clearable" />
      </template>
    </Variant>

    <Variant title="More kinds of icon">
      <el-rate v-model="currentRate" :icons="icons" :void-icon="ChatRound" :colors="colors" />
    </Variant>

    <Variant title="Readonly">
      <el-rate
        v-model="currentRate" :disabled="disabled" :show-score="showScore"
        score-template="{value} points"
      />
      <template #controls>
        <HstCheckbox v-model="disabled" title="Readonly" />
        <HstCheckbox v-model="showScore" title="ShowScore" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

The scores are divided into three levels by default, and the scores and emotional tendencies can be graded using an array of colors (by default, no colors are distinguished). The colors corresponding to the three levels are set using the `colors` property, while their corresponding two thresholds are set via `low-threshold` and `high-threshold`.

## Sizes

## Half-selection

Attribute `allow-half` allows half stars

## Auxiliary Text

Expressing the corresponding score directly with auxiliary text
Setting the `show-text` property for the component will display the auxiliary text on the right-hand side. The auxiliary text can be specified for each score by setting `texts`. `texts` is an array whose length should be equal to the maximum `max`.

## Clearable

When you click the same value again, you can reset the value to 0.

## More kinds of icons

When there are multiple levels of ratings, different types of icons can be used to distinguish the rating levels.
Setting the `icon-classes` property allows you to customize the icons for different segments. If you pass in an array, there are 3 elements, which are the class names corresponding to the 3 segments; if you pass in an object, you can customize the segments, with the key being the segment's bounds value and the key being the corresponding class name. This example also uses `void-icon` to specify the class name of the icon when it is not selected.

## Read-only

Read-only ratings are used to display scores, allowing half-stars to appear.
Setting the `disabled` property for a component means that the component is read-only. If `show-score` is set in this case, the current score will be displayed on the right-hand side. In addition, you can use the attribute `score-template` to provide a scoring template. The template is a string containing `{value}`, which will be replaced with the current score.
</docs>
