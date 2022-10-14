<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import { logEvent } from 'histoire/client'

type HstControlOption = {
  label: string
  value: any
}[]

const isOpening = ref(true)
const isOpening_sec = ref(false)
const isInlinePrompt = ref(false)
const activeColor = ref('#409eff')
const inActiveColor = ref('#dcdfe6')
const sizeValue = ref('small')
const isDisabled = ref(true)
const isLoading = ref(true)

const preventSwtchValue = ref(
  {
    value: false,
    value_sec: false,
    loading: false,
    loading_sec: false,
  },
)
const swtichValue = ref(
  {
    value: 0,
    activeValue: 100,
    inActiveValue: 0,
  },
)
const switchText = ref(
  {
    activeText: 'Y',
    inActiveText: 'F',
  },
)

const beforeChange = () => {
  preventSwtchValue.value.loading = true
  return new Promise((resolve) => {
    setTimeout(() => {
      preventSwtchValue.value.loading = false
      ElMessage.success('Switch success')
      return resolve(true)
    }, 1000)
  })
}
const beforeChangeSecond = () => {
  preventSwtchValue.value.loading_sec = true
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      preventSwtchValue.value.loading_sec = false
      ElMessage.error('Switch failed')
      return reject(new Error('Error'))
    }, 1000)
  })
}

const activeColorOptions: HstControlOption = [
  {
    label: 'default',
    value: '#409eff',
  },
  {
    label: 'green',
    value: '#13ce66',
  },
  {
    label: 'red',
    value: '#ff4949',
  },
]
const inActiveColorOptions: HstControlOption = [
  {
    label: 'default',
    value: '#dcdfe6',
  },
  {
    label: 'grey',
    value: '#747b92',
  },
  {
    label: 'black',
    value: '#000000',
  },
]
const sizeValueOptions: HstControlOption = [
  {
    label: 'small',
    value: 'small',
  },
  {
    label: 'normal',
    value: 'normal',
  },
  {
    label: 'large',
    value: 'large',
  },
]
</script>

<template>
  <Story title="Data/Switch">
    <Variant title="Basic usage">
      <el-switch v-model="isOpening" :active-color="activeColor" :inactive-color="inActiveColor" />
      <template #controls>
        <HstCheckbox v-model="isOpening" title="switch value" :options="isOpening" />
        <HstRadio v-model="activeColor" title="activeColor" :options="activeColorOptions" />
        <HstRadio v-model="inActiveColor" title="inActiveColor" :options="inActiveColorOptions" />
      </template>
    </Variant>

    <Variant title="Sizes">
      <el-switch v-model="isOpening" active-text="open" inactive-text="close" :size="sizeValue" />
      <template #controls>
        <HstRadio v-model="sizeValue" title="Sizes" :options="sizeValueOptions" />
      </template>
    </Variant>

    <Variant title="Text description">
      <el-switch
        v-model="isOpening" :active-text="switchText.activeText" :inactive-text="switchText.inActiveText"
        :inline-prompt="isInlinePrompt"
      />
      <template #controls>
        <HstCheckbox v-model="isInlinePrompt" title="inlinePrompt" :options="isInlinePrompt" />
        <HstText v-model="switchText.activeText" title="activeText" />
        <HstText v-model="switchText.inActiveText" title="inActiveText" />
      </template>
    </Variant>

    <Variant title="Display custom icons">
      <el-switch v-model="isOpening" :active-icon="Check" :inactive-icon="Close" :inline-prompt="isInlinePrompt" />
      <template #controls>
        <HstCheckbox v-model="isInlinePrompt" title="inlinePrompt" :options="isInlinePrompt" />
      </template>
    </Variant>

    <Variant title="Extended value types">
      <el-tooltip :content="`Switch value: ${swtichValue.value}`" placement="bottom">
        <el-switch
          v-model="swtichValue.value" :active-value="swtichValue.activeValue"
          :inactive-value="swtichValue.inActiveValue"
        />
      </el-tooltip>
      <template #controls>
        <HstNumber v-model="swtichValue.activeValue" title="activeValue" />
        <HstNumber v-model="swtichValue.inActiveValue" title="inActiveValue" />
      </template>
    </Variant>

    <Variant title="Disabled">
      <el-switch v-model="isOpening" style="margin-right: 8px;" :disabled="isDisabled" />
      <el-switch v-model="isOpening_sec" />
      <template #controls>
        <HstCheckbox v-model="isDisabled" title="disabled" :options="isDisabled" />
      </template>
    </Variant>

    <Variant title="Loading">
      <el-switch v-model="isOpening" style="margin-right: 8px;" :loading="isLoading" />
      <el-switch v-model="isOpening_sec" style="margin-right: 8px;" :loading="isLoading" />
      <template #controls>
        <HstCheckbox v-model="isLoading" title="loading" :options="isLoading" />
      </template>
    </Variant>

    <Variant title="prevent switching">
      <el-switch
        v-model="preventSwtchValue.value"
        style="margin-right: 8px;"
        :before-change="beforeChange" :loading="preventSwtchValue.loading"
        @change="logEvent('change', { change: 'switch value has changed' })"
        @click="logEvent('click', $event)"
      />
      <el-switch
        v-model="preventSwtchValue.value_sec" :loading="preventSwtchValue.loading_sec"
        :before-change="beforeChangeSecond"
        @change="logEvent('change', { change: 'switch value has changed' })"
        @click="logEvent('click', $event)"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
Switch is used for switching between two opposing states.

## Basic usage

Bind v-model to a Boolean typed variable.

## Sizes

Switchable buttons of different sizes

## Text description

You can add active-text and inactive-text attribute to show texts. use inline-prompt attribute to control text is displayed inside dot.

You can add active-text and inactive-text attribute to show texts.

## Display custom icons

You can add active-icon and inactive-icon attribute to show icons. use inline-prompt attribute to control icon is displayed inside dot.

## Extended value types

You can set active-value and inactive-value attributes. They both receive a Boolean, String or Number typed value.

## Disabled

Adding the disabled attribute disables Switch.

## Loading

Setting the loading attribute to true indicates a loading state on the Switch.

## prevent switching

the before-change property, If false is returned or a Promise is returned and then is rejected, will stop switching.
</docs>
