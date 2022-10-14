<script setup lang="ts">
import { ref } from 'vue'
import type { ResultProps } from 'element-plus'

const currentIcon = ref('info')
const title = ref('Tip')
const subTitle = ref('Please follow the instructions')
const iconList: Record<'label' & 'value', ResultProps['icon']>[] = [
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
  <Story title="Data/Result">
    <Variant title="Basic usage">
      <el-result
        :icon="currentIcon"
        :title="title"
        :sub-title="subTitle"
      />
      <template #controls>
        <HstRadio
          v-model="currentIcon"
          title="Icon"
          :options="iconList"
        />
      </template>
    </Variant>
    <Variant title="Customized content">
      <el-result title="404" sub-title="Sorry, request error">
        <template #icon>
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          />
        </template>
        <template #extra>
          <el-button type="primary">
            Back
          </el-button>
        </template>
      </el-result>
    </Variant>
  </Story>
</template>

<docs lang="md">
Used to give feedback on the result of user's operation or access exception.

## Basic usage

Result usage

## Customized content
</docs>

