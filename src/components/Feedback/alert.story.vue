<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps } from 'element-plus'
import { logEvent } from 'histoire/client'

const currentType = ref<AlertProps['type']>('success')
const currentTheme = ref<AlertProps['effect']>('light')
const closableState = ref({
  text: 'Gotcha',
  closable: true,
})
const showIcon = ref(true)
const centeredText = ref(false)
const description = ref('This is a description')

const alertTypeList = [
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'error',
    value: 'error',
  },
  {
    label: 'info',
    value: 'info',
  },
]

const fireClose = (e: Event) => {
  logEvent('close', e)
}
</script>

<template>
  <Story title="Feedback/Alert">
    <Variant title="Basic Usage">
      <el-alert :type="currentType" :title="currentType" />
      <template #controls>
        <HstRadio
          v-model="currentType"
          title="Alert Type"
          :options="alertTypeList"
        />
      </template>
    </Variant>
    <Variant title="Theme">
      <el-alert :type="currentType" :effect="currentTheme" :title="currentType" />
      <template #controls>
        <HstRadio
          v-model="currentType"
          title="Alert Type"
          :options="alertTypeList"
        />

        <HstButtonGroup
          v-model="currentTheme"
          title="Theme"
          :options="[
            {
              label: 'Dark Theme',
              value: 'dark',
            },
            {
              label: 'Light Theme',
              value: 'light',
            },
          ]"
        />
      </template>
    </Variant>

    <Variant title="Customizable Close Button">
      <el-alert :title="currentType" :type="currentType" :close-text="closableState.text" :closable="closableState.closable" :effect="currentTheme" @close="fireClose" />

      <template #controls>
        <HstText
          v-model="closableState.text"
          title="Custom Close Text"
        />
        <HstCheckbox
          v-model="closableState.closable"
          title="Closable"
        />
      </template>
    </Variant>

    <Variant title="With Icon">
      <el-alert :title="currentType" :type="currentType" :show-icon="showIcon" :effect="currentTheme" />
      <template #controls>
        <HstCheckbox
          v-model="showIcon"
          title="Show Icon"
        />
        <HstRadio
          v-model="currentType"
          title="Alert Type"
          :options="alertTypeList"
        />
        <HstButtonGroup
          v-model="currentTheme"
          title="Theme"
          :options="[
            {
              label: 'Dark Theme',
              value: 'dark',
            },
            {
              label: 'Light Theme',
              value: 'light',
            },
          ]"
        />
      </template>
    </Variant>

    <Variant title="Centered Text">
      <el-alert :title="currentType" :type="currentType" :center="centeredText" :show-icon="showIcon" />
      <template #controls>
        <HstCheckbox
          v-model="showIcon"
          title="Show Icon"
        />
        <HstCheckbox
          v-model="centeredText"
          title="Centered Text"
        />
      </template>
    </Variant>

    <Variant title="With Icon and Description">
      <el-alert :title="currentType" :type="currentType" :show-icon="showIcon" :effect="currentTheme" :description="description" />
      <template #controls>
        <HstText
          v-model="description"
          title="Description"
        />
        <HstCheckbox
          v-model="showIcon"
          title="Show Icon"
        />
        <HstRadio
          v-model="currentType"
          title="Alert Type"
          :options="alertTypeList"
        />
        <HstButtonGroup
          v-model="currentTheme"
          title="Theme"
          :options="[
            {
              label: 'Dark Theme',
              value: 'dark',
            },
            {
              label: 'Light Theme',
              value: 'light',
            },
          ]"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Alert usage

## Theme

Alert provide two different themes, light and dark.

Set effect to change theme, default is light.
</docs>

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
