<script setup lang="ts">
import type { PopconfirmProps } from 'element-plus'
import { buttonTypes } from './constants'

const basicData = reactive({
  title: 'Are you sure to delete this?',
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  confirmButtonType: 'primary' as PopconfirmProps['confirmButtonType'],
  cancelButtonType: 'text' as PopconfirmProps['cancelButtonType'],
  hideIcon: false,
  width: 150,
})

const basicSource = computed(() => {
  return `<el-popconfirm${isAttribute(
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
    basicData.hideIcon,
    'hideIcon',
  )}${isAttribute(
    basicData.width !== 150,
    `:width="${basicData.width}"`,
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
        :title="basicData.title"
        :confirm-button-text="basicData.confirmButtonText"
        :cancel-button-text="basicData.cancelButtonText"
        :confirm-button-type="basicData.confirmButtonType"
        :cancel-button-type="basicData.cancelButtonType"
        :hide-icon="basicData.hideIcon"
        :width="basicData.width"
      >
        <template #reference>
          <el-button>
            el-popover
          </el-button>
        </template>
      </el-popconfirm>
      <template #controls>
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
        <HstCheckbox v-model="basicData.hideIcon" title="hideIcon" />
        <HstNumber v-model="basicData.width" title="width" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
