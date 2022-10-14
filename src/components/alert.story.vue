<script setup lang="ts">
import { ref } from 'vue'
import type { AlertProps } from 'element-plus'
import { ElAlert, ElSwitch } from 'element-plus'
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
      <el-alert v-for="alertType in alertTypeList" :key="alertType.value" :type="alertType.value">
        {{ alertType.label }}
      </el-alert>

      <template #controls>
        <HstRadio v-model="currenType" title="type" :option="alertTypeList" />
      </template>
    </Variant>
    <Variant title="Theme">
      <el-switch
        v-model="currentTheme"
        active-text="light"
        active-value="light"
        inactive-text="dark"
        inactive-value="dark"
      />

      <el-alert v-for="alertType in alertTypeList" :key="alertType.value" :type="alertType.value" :effect="currentTheme">
        {{ alertType.label }}
      </el-alert>

      <template #controls>
        <HstRadio v-model="currenType" title="type" :option="alertTypeList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Alert usage
</docs>

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
