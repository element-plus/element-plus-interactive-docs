<script setup lang="ts">
import { ref } from 'vue'
import type { DividerProps } from 'element-plus'

const currentDirection = ref<DividerProps['direction']>('horizontal')
const currentBorderStyle = ref<DividerProps['borderStyle']>('solid')
const contentPosition = ref<DividerProps['contentPosition']>('center')
const content = ref('Element-Plus')

const dividerDirectionList = [
  'horizontal',
  'vertical',
]

const contentPositionList = [
  'left',
  'right',
  'center',
]
</script>

<template>
  <Story title="Others/Divider" icon="material-symbols:safety-divider">
    <Variant title="Basic Usage">
      <span>Rain</span>
      <el-divider />
      <span>Home</span>
      <el-divider />
      <span>Grass</span>
    </Variant>

    <Variant title="Direction">
      <span>Rain</span>
      <el-divider :direction="currentDirection" />
      <span>Home</span>
      <el-divider :direction="currentDirection" />
      <span>Grass</span>
      <template #controls>
        <HstRadio
          v-model="currentDirection"
          title="Divider Direction"
          :options="dividerDirectionList"
        />
      </template>
    </Variant>

    <Variant title="Border Style">
      <span>Rain</span>
      <el-divider :border-style="currentBorderStyle" />
      <span>Home</span>
      <el-divider :border-style="currentBorderStyle" />
      <span>Grass</span>
      <template #controls>
        <HstText
          v-model="currentBorderStyle"
          title="currentBorderStyle"
        />
      </template>
    </Variant>

    <Variant title="With Content">
      <span>Rain</span>
      <el-divider :content-position="contentPosition">
        {{ content }}
      </el-divider>
      <span>Grass</span>
      <template #controls>
        <HstRadio
          v-model="contentPosition"
          title="Position of content on the divider line"
          :options="contentPositionList"
        />
        <HstText
          v-model="content"
          title="content"
        />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Divider usage

## Direction

Divider provides two different Direction, horizontal and vertical.

Set divider's direction, default is horizontal.

## Border Style

The style of divider, border-style, acceptance values referenced from the website: [CSS/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)

## With Content

Divider provides three different position of the customized content on the divider line, left, right and center.

Default is center.
</docs>

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
