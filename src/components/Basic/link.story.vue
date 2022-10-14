<script setup lang="ts">
import { ref } from 'vue'
import { Edit } from '@element-plus/icons-vue'
import type { LinkProps } from 'element-plus'
const currentType = ref<LinkProps['type']>('primary')
const isDisabled = ref(true)
const isUnderline = ref(false)
const linkTypeList: { label: string; value: LinkProps['type'] }[] = [
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
  <Story title="Basic/Link">
    <Variant title="Basic Usage">
      <el-link :type="currentType" :href="void 0">
        {{ currentType }}
      </el-link>
      <template #controls>
        <HstRadio v-model="currentType" title="Link Type" :options="linkTypeList" />
      </template>
    </Variant>
    <Variant title="Disabled">
      <el-link :type="currentType" :disabled="isDisabled">
        {{ currentType }}
      </el-link>
      <template #controls>
        <HstCheckbox
          v-model="isDisabled"
          title="Disabled"
        />
        <HstRadio v-model="currentType" title="Link Type" :options="linkTypeList" />
      </template>
    </Variant>

    <Variant title="Underline">
      <el-link :type="currentType" :underline="isUnderline">
        {{ currentType }}
      </el-link>
      <template #controls>
        <HstCheckbox
          v-model="isUnderline"
          title="Underline"
        />
        <HstRadio v-model="currentType" title="Link Type" :options="linkTypeList" />
      </template>
    </Variant>
    <Variant title="Icon">
      <el-link :type="currentType" :icon="Edit" />
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Link usage
</docs>
