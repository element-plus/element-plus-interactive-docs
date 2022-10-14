<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'

const buttonType = ref('success')
const buttonTypeList = [
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'primary',
    value: 'primary',
  },
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
  <Story title="Basic/Button">
    <Variant title="Basic usage">
      <el-button :type="buttonType" @click="logEvent('click', $event)">
        {{ buttonType }}
      </el-button>

      <template #controls>
        <HstRadio v-model="buttonType" title="type" :option="buttonTypeList" />
      </template>
    </Variant>
    <Variant title="Disabled Button">
      <el-button disabled>
        Default
      </el-button>
      <el-button type="primary" disabled>
        Primary
      </el-button>
      <el-button type="success" disabled>
        Success
      </el-button>
      <el-button type="info" disabled>
        Info
      </el-button>
      <el-button type="warning" disabled>
        Warning
      </el-button>
      <el-button type="danger" disabled>
        Danger
      </el-button>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

demo Use `type`, `plain`, `round` and `circle` to define Button's style.
</docs>
