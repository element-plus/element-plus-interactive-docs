<script setup lang="ts">
import type { DividerProps } from 'element-plus'
import { borderStyleList, contentPositionList, dividerDirectionList } from './constants'

const currentDirection = ref<DividerProps['direction']>('horizontal')
const currentBorderStyle = ref<DividerProps['borderStyle']>('solid')
const contentPosition = ref<DividerProps['contentPosition']>('center')
const content = ref('Element-Plus')
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
        <HstButtonGroup
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
        <HstSelect
          v-model="currentBorderStyle"
          :options="borderStyleList"
          title="BorderStyle"
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
        <HstButtonGroup
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

<style>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
