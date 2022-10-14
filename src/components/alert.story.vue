<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps } from 'element-plus'
import { ElAlert } from 'element-plus'
import 'element-plus/dist/index.css'

const currenType = ref('success')

const currentTheme = ref<AlertProps['effect']>('light')
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
</script>

<template>
  <Story title="Basic/Alert">
    <Variant title="Basic Usage">
      <el-alert :type="currenType">
        {{ currenType }}
      </el-alert>
      <template #controls>
        <HstRadio
          v-model="currenType"
          title="Alert Type"
          :options="alertTypeList"
        />
      </template>
    </Variant>
    <Variant title="Theme">
      <el-alert :type="currenType" :effect="currentTheme">
        {{ currenType }}
      </el-alert>

      <template #controls>
        <HstRadio
          v-model="currenType"
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
