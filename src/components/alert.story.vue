<script setup lang="ts">
import { ref } from 'vue'
import { ElAlert } from 'element-plus'
import 'element-plus/dist/index.css'

const alertType = ref('success')
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
    label: 'danger',
    value: 'danger',
  },
  {
    label: 'info',
    value: 'info',
  },
]
</script>

<template>
  <Story title="Basic/Alert">
    <Variant title="Alert usage">
      <el-alert :type="alertType">
        {{ alertType }}
      </el-alert>

      <template #controls>
        <HstRadio v-model="alertType" title="type" :option="alertTypeList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Alert usage
</docs>
