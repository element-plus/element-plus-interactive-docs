<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
import { cloneDeep } from 'lodash'
import { genSourceCode } from './gen-code'
import controls, { defaultMessageBoxOptions } from './controls'
import type { MessageBoxOptions } from './controls'

// AlertMessageBox
const alertMessageBoxOptions = ref<MessageBoxOptions>()
function openAlertMessageBox() {
  const options = alertMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)
  ElMessageBox.alert(options.title, options)
}

const alertMessageBoxSource = computed(() => {
  return genSourceCode('alert', unref(alertMessageBoxOptions))
})

// ConfirmMessageBox
const confirmMessageBoxOptions = ref<MessageBoxOptions>()
function openConfirmMessageBox() {
  const options = confirmMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)
  ElMessageBox.confirm(options.title, options)
}

const confirmMessageBoxSource = computed(() => {
  return genSourceCode('confirm', unref(confirmMessageBoxOptions))
})

// PromptMessageBox
const promptMessageBoxOptions = ref<MessageBoxOptions>()
function openPromptMessageBox() {
  const options = promptMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)
  ElMessageBox.prompt(options.title || 'title', options)
}

const promptMessageBoxSource = computed(() => {
  return genSourceCode('prompt', unref(promptMessageBoxOptions))
})

// Customization
const customizationMessageBoxOptions = ref<MessageBoxOptions>()

function openCustomizationMessageBox() {
  const options = customizationMessageBoxOptions.value || cloneDeep(defaultMessageBoxOptions)
  ElMessageBox(options)
}

const customizationMessageBoxSource = computed(() => {
  return genSourceCode(undefined, unref(customizationMessageBoxOptions))
})
</script>

<template>
  <Story title="Feedback/MessageBox" icon="mdi:message-text-fast-outline">
    <Variant
      title="Alert"
      :source="alertMessageBoxSource"
    >
      <el-button @click="openAlertMessageBox">
        Open the Alert Message Box
      </el-button>
      <template #controls>
        <controls v-model="alertMessageBoxOptions" />
      </template>
    </Variant>
    <Variant
      title="Confirm"
      :source="confirmMessageBoxSource"
    >
      <el-button @click="openConfirmMessageBox">
        Open the Confirm Message Box
      </el-button>
      <template #controls>
        <controls v-model="confirmMessageBoxOptions" />
      </template>
    </Variant>
    <Variant
      title="Prompt"
      :source="promptMessageBoxSource"
    >
      <el-button @click="openPromptMessageBox">
        Open the Prompt Message Box
      </el-button>
      <template #controls>
        <controls v-model="promptMessageBoxOptions" />
      </template>
    </Variant>
    <Variant
      title="Customization"
      :source="customizationMessageBoxSource"
    >
      <el-button @click="openCustomizationMessageBox">
        Open the Customization Message Box
      </el-button>
      <template #controls>
        <controls v-model="customizationMessageBoxOptions" />
      </template>
    </Variant>
  </Story>
</template>
