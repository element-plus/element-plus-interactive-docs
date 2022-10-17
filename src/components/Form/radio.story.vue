<script setup lang="ts">
import { ref } from 'vue'
import type { RadioProps } from 'element-plus'
import { logEvent } from 'histoire/client'
const radio = ref('1')
const isDisabled = ref(true)
const isBorder = ref(true)
const currentSize = ref<RadioProps['size']>('large')
const radioSizeList: Record<'label' & 'value', RadioProps['size']>[] = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const radioChange = (e: string | number | boolean) => {
  logEvent('change', e)
}
</script>

<template>
  <Story title="Form/Radio" icon="material-symbols:radio-button-checked-outline">
    <Variant title="Basic Usage">
      <el-radio v-model="radio" :size="currentSize" label="1">
        Option 1
      </el-radio>
      <el-radio v-model="radio" :size="currentSize" label="2">
        Option 2
      </el-radio>
      <template #controls>
        <HstRadio
          v-model="radio" title="Radio"
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"
        />
        <HstRadio v-model="currentSize" title="Size" :options="radioSizeList" />
      </template>
    </Variant>

    <Variant title="Disabled">
      <el-radio v-model="radio" :size="currentSize" :disabled="isDisabled" label="1">
        Option 1
      </el-radio>
      <el-radio v-model="radio" :size="currentSize" :disabled="isDisabled" label="2">
        Option 2
      </el-radio>
      <template #controls>
        <HstCheckbox v-model="isDisabled" title="Disabled" />
      </template>
    </Variant>

    <Variant title="Group">
      <el-radio-group v-model="radio" @change="radioChange">
        <el-radio label="1">
          Option 1
        </el-radio>
        <el-radio label="2">
          Option 2
        </el-radio>
      </el-radio-group>
      <template #controls>
        <HstRadio
          v-model="radio" title="Radio"
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"
        />
      </template>
    </Variant>

    <Variant title="Button style">
      <el-radio-group v-model="radio">
        <el-radio-button label="1">
          Option 1
        </el-radio-button>
        <el-radio-button label="2">
          Option 2
        </el-radio-button>
      </el-radio-group>
    </Variant>

    <Variant title="With borders">
      <el-radio-group v-model="radio">
        <el-radio label="1" :size="currentSize" :border="isBorder">
          Option 1
        </el-radio>
        <el-radio label="2" :size="currentSize" :border="isBorder">
          Option 2
        </el-radio>
      </el-radio-group>
      <template #controls>
        <HstCheckbox v-model="isBorder" title="Border" />
        <HstRadio
          v-model="radio" title="Radio"
          :options="[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]"
        />
        <HstRadio v-model="currentSize" title="Size" :options="radioSizeList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

radio usage
</docs>
