<script setup lang="ts">
import type { PopconfirmProps } from 'element-plus'
import { buttonTypes, effectTypes, triggerTypes } from './constants'
import placementOptions from '@/constants/placementOptions'

const basicData = reactive({
  effect: 'light',
  title: 'Are you sure to delete this?',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  confirmButtonType: 'primary' as PopconfirmProps['confirmButtonType'],
  cancelButtonType: 'text' as PopconfirmProps['cancelButtonType'],
  trigger: 'click',
  placement: 'bottom',
  disabled: false,
  hideIcon: false,
  showArrow: true,
  showAfter: 0,
  hideAfter: 0,
  width: 150,
  offset: 0,
})

const basicSource = computed(() => {
  return `<el-popconfirm${isAttribute(
    basicData.effect !== 'light',
    'effect="dark"',
  )}${isAttribute(
    basicData.title !== '',
    `title="${basicData.title}"`,
  )}${isAttribute(
    basicData.confirmButtonText !== 'Yes',
    `confirmButtonText="${basicData.confirmButtonText}"`,
  )}${isAttribute(
    basicData.cancelButtonText !== 'No',
    `cancelButtonText="${basicData.cancelButtonText}"`,
  )}${isAttribute(
    basicData.confirmButtonType !== 'primary',
    `confirmButtonType="${basicData.confirmButtonType}"`,
  )}${isAttribute(
    basicData.cancelButtonType !== 'text',
    `cancelButtonType="${basicData.cancelButtonType}"`,
  )}${isAttribute(
    basicData.trigger !== 'click',
    `trigger="${basicData.trigger}"`,
  )}${isAttribute(
    basicData.placement !== 'bottom',
    `placement="${basicData.placement}"`,
  )}${isAttribute(
    basicData.disabled,
    'disabled',
  )}${isAttribute(
    basicData.hideIcon,
    'hideIcon',
  )}${isAttribute(
    !basicData.showArrow,
    ':showArrow="false"',
  )}${isAttribute(
    basicData.showAfter !== 0,
    `:showAfter="${basicData.showAfter}"`,
  )}${isAttribute(
    basicData.hideAfter !== 0,
    `:hideAfter="${basicData.hideAfter}"`,
  )}${isAttribute(
    basicData.width !== 150,
    `:width="${basicData.width}"`,
  )}${isAttribute(
    basicData.offset !== 0,
    `:offset="${basicData.offset}"`,
  )}
>
  <template #reference>
    <el-button>el-popconfirm</el-button>
  </template>
</el-popover>`
})
</script>

<template>
  <Story title="Feedback/Popconfirm" icon="grommet-icons:tooltip">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-popconfirm
        :effect="basicData.effect"
        :title="basicData.title"
        :confirm-button-text="basicData.confirmButtonText"
        :cancel-button-text="basicData.cancelButtonText"
        :confirm-button-type="basicData.confirmButtonType"
        :cancel-button-type="basicData.cancelButtonType"
        :trigger="basicData.trigger"
        :placement="basicData.placement"
        :disabled="basicData.disabled"
        :hide-icon="basicData.hideIcon"
        :show-arrow="basicData.showArrow"
        :show-after="basicData.showAfter"
        :hide-after="basicData.hideAfter"
        :width="basicData.width"
        :offset="basicData.offset"
      >
        <template #reference>
          <el-button>
            el-popover
          </el-button>
        </template>
      </el-popconfirm>
      <template #controls>
        <HstButtonGroup
          v-model="basicData.effect" title="effect"
          :options="effectTypes"
        />
        <HstText
          v-model="basicData.title"
          title="title"
        />
        <HstText
          v-model="basicData.confirmButtonText"
          title="confirmButtonText"
        />
        <HstText
          v-model="basicData.cancelButtonText"
          title="cancelButtonText"
        />
        <HstSelect
          v-model="basicData.confirmButtonType"
          title="confirmButtonType"
          :options="buttonTypes"
        />
        <HstSelect
          v-model="basicData.cancelButtonType"
          title="cancelButtonType"
          :options="buttonTypes"
        />
        <HstSelect
          v-model="basicData.trigger"
          title="trigger"
          :options="triggerTypes"
        />
        <HstSelect
          v-model="basicData.placement"
          title="placement"
          :options="placementOptions"
        />
        <HstCheckbox v-model="basicData.disabled" title="disabled" />
        <HstCheckbox v-model="basicData.hideIcon" title="hideIcon" />
        <HstCheckbox v-model="basicData.showArrow" title="showArrow" />
        <HstNumber v-model="basicData.showAfter" title="showAfter" />
        <HstNumber v-model="basicData.hideAfter" title="hideAfter" />
        <HstNumber v-model="basicData.width" title="width" />
        <HstNumber v-model="basicData.offset" title="offset" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
