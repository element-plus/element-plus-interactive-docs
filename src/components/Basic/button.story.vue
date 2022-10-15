<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'

const typeList = [
  {
    label: 'default',
    value: '',
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

const sizeList = [
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

const basicButtonData = ref({
  text: 'Button',
  type: '',
  typeList,
  size: '',
  sizeList,
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
})

const colorButtonData = ref({
  text: 'Custom Color Button',
  color: '#626aef',
  plain: false,
  disabled: false,
})
const buttonGroupData = ref({
  type: '',
  typeList,
  size: '',
  sizeList,
})
</script>

<template>
  <Story title="Basic/Button" auto-props-disabled>
    <Variant title="Basic usage" >
      <el-button
        :type="basicButtonData.type"
        :size="basicButtonData.size"
        :plain="basicButtonData.plain"
        :round="basicButtonData.round"
        :disabled="basicButtonData.disabled"
        :loading="basicButtonData.loading"
        @click="logEvent('click', $event)"
      >
        {{ basicButtonData.text }}
      </el-button>
      <template #controls>
        <HstText v-model="basicButtonData.text" title="Text" />
        <HstCheckbox v-model="basicButtonData.plain" title="Plain" />
        <HstCheckbox v-model="basicButtonData.round" title="Round" />
        <HstCheckbox v-model="basicButtonData.disabled" title="Disabled" />
        <HstCheckbox v-model="basicButtonData.loading" title="Loading" />

        <HstRadio
          v-model="basicButtonData.type"
          title="Button Type"
          :options="basicButtonData.typeList"
        />
        <HstRadio
          v-model="basicButtonData.size"
          title="Size"
          :options="basicButtonData.sizeList"
        />
      </template>
    </Variant>
    <Variant title="Custom Color" >
      <el-button
        :plain="colorButtonData.plain"
        :disabled="colorButtonData.disabled"
        :color="colorButtonData.color"
        @click="logEvent('click', $event)"
      >
        {{ colorButtonData.text }}
      </el-button>
      <template #controls>
        <HstText v-model="colorButtonData.text" title="Text" />
        <span style="padding: 0 8px; font-size: 14px; margin-right: 68px;">
          Color:
        </span>
        <el-color-picker v-model="colorButtonData.color" size="small" />
        <HstCheckbox v-model="colorButtonData.plain" title="Plain" />
        <HstCheckbox v-model="colorButtonData.disabled" title="Disabled" />
      </template>
    </Variant>

    <Variant title="Button Group" >
      <el-button-group
        :size="buttonGroupData.size"
        :type="buttonGroupData.type"
      >
        <el-button :icon="ArrowLeft">
          Previous Page
        </el-button>
        <el-button>
          Next Page
          <el-icon class="el-icon--right">
            <arrow-right />
          </el-icon>
        </el-button>
      </el-button-group>
      <template #controls>
        <HstRadio
          v-model="buttonGroupData.type"
          title="Button Type"
          :options="buttonGroupData.typeList"
        />
        <HstRadio
          v-model="buttonGroupData.size"
          title="Size"
          :options="buttonGroupData.sizeList"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

demo Use `type`, `plain`, `round` and `circle` to define Button's style.
</docs>
