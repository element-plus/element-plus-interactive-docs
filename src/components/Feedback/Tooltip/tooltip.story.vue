<script setup lang="ts">
import type { ElTooltipProps } from 'element-plus'
import placementOptions from '@/constants/placementOptions'

const basicData = reactive({
  effect: 'dark',
  content: 'content',
  rawContent: false,
  placement: 'bottom',
  visible: null,
  disabled: false,
  offset: 0,
  showAfter: 0,
  showArrow: true,
  hideAfter: 0,
  enterable: true,
  trigger: 'hover',
} as ElTooltipProps)

const basicSource = computed(() => {
  return `<el-tooltip${isAttribute(
    basicData.effect !== 'dark',
    'effect="light"',
  )}${isAttribute(
    basicData.content !== '',
    `content="${basicData.content}"`,
  )}${isAttribute(
    basicData.rawContent,
    'raw-content',
  )}${isAttribute(
    basicData.placement !== 'bottom',
    `placement="${basicData.placement}"`,
  )}${isAttribute(
    basicData.visible !== null,
    `:visible="${basicData.visible}"`,
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )}${isAttribute(
    basicData.offset !== 0,
    `:offset="${basicData.offset}"`,
  )}${isAttribute(
    basicData.showAfter !== 0,
    `:show-after="${basicData.showAfter}"`,
  )}${isAttribute(
    !basicData.showArrow,
    ':show-arrow="false"',
  )}${isAttribute(
    basicData.hideAfter !== 0,
    `:hide-after="${basicData.hideAfter}"`,
  )}${isAttribute(
    !basicData.enterable,
    ':enterable="false"',
  )}${isAttribute(
    basicData.trigger !== 'hover',
    `trigger="${basicData.trigger}"`,
  )}
>
  <el-button>el-tooltip</el-button>
</el-tooltip>`
})
</script>

<!-- icon from https://icones.js.org/collection/all?s=tooltip -->
<template>
  <Story title="Feedback/Tooltip" icon="mdi:tooltip-minus-outline">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-tooltip
        :effect="basicData.effect"
        :content="basicData.content"
        :raw-content="basicData.rawContent"
        :placement="basicData.placement"
        :visible="basicData.visible"
        :disabled="basicData.disabled"
        :offset="basicData.offset"
        :show-after="basicData.showAfter"
        :show-arrow="basicData.showArrow"
        :hide-after="basicData.hideAfter"
        :enterable="basicData.enterable"
        :trigger="basicData.trigger"
      >
        <el-button>el-tooltip</el-button>
      </el-tooltip>
      <template #controls>
        <HstButtonGroup
          v-model="basicData.effect" title="effetc"
          :options="[
            {
              value: 'light',
              label: 'light',
            },
            {
              value: 'dark',
              label: 'dark',
            },
          ]"
        />
        <HstCheckbox v-model="basicData.rawContent" title="raw-content" />
        <HstText
          v-model="basicData.content"
          title="content"
        />
        <HstSelect
          v-model="basicData.placement" title="placement"
          :options="placementOptions"
        />
        <HstCheckbox v-model="basicData.disabled" title="disabled" />
        <HstButtonGroup
          v-model="basicData.visible"
          :style="useElDisplay(!basicData.disabled)"
          title="visible"
          :options="[
            {
              value: true,
              label: 'true',
            },
            {
              value: false,
              label: 'false',
            },
            {
              value: null,
              label: 'null',
            },
          ]"
        />
        <HstNumber v-model="basicData.offset" title="offset" />
        <HstNumber v-model="basicData.showAfter" title="show-after" />
        <HstNumber v-model="basicData.hideAfter" title="hide-after" />
        <HstCheckbox v-model="basicData.showArrow" title="show-arrow" />
        <HstCheckbox v-model="basicData.enterable" title="enterable" />
        <HstSelect
          v-model="basicData.trigger"
          title="trigger"
          :options="[
            {
              value: 'hover',
              label: 'hover',
            },
            {
              value: 'focus',
              label: 'focus',
            },
            {
              value: 'click',
              label: 'click',
            },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
