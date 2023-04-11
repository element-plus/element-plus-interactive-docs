import { isNil } from 'lodash'
import { defaultMessageBoxOptions } from './controls'
import type { MessageBoxOptions } from './controls'

const defaultOptionsKeys = Object.keys(defaultMessageBoxOptions)

function genOptionCode(options: MessageBoxOptions, titleAndMessage?: boolean) {
  return `
const option = {
${
    Object.keys(options)
      .filter((key) => {
        if (!titleAndMessage && (key === 'title' || key === 'message'))
          return false
        if (!defaultOptionsKeys.includes(key)
        || defaultMessageBoxOptions[key] === options[key as keyof MessageBoxOptions])
          return false
        return !isNil(options[key as keyof MessageBoxOptions])
      })
      .map((key) => {
        let value: any = options[key as keyof MessageBoxOptions]
        if (typeof value === 'string')
          value = `\"${value}\"`
        else if (key === 'icon')
          value = value.name
        return `  ${key}: ${value},`
      })
      .join('\n')
  }
}
`
}

export function genSourceCode(methodName?: string, data: MessageBoxOptions | undefined) {
  if (isNil(data))
    data = defaultMessageBoxOptions
  return `<script setup lang='ts'>
import { ElMessageBox } from 'element-plus'
${genOptionCode(data, !methodName)}
const openMessageBox = () => {
  ElMessageBox${
    methodName ? `.${methodName}("${data.title}", "${data.message}", ` : '('
  }option);
}
<\/script>
<template>
  <el-button @click="openMessageBox">Open the ${
    methodName ? methodName.replace(/^./, methodName[0].toUpperCase()) : 'Customization'
  } Message Box</el-button>
<\/template>`
}
