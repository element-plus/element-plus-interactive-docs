<script setup lang="ts">
import { ref } from 'vue'
import type { SpaceProps } from 'element-plus'

const currentDirection = ref<SpaceProps['direction']>('vertical')
const spaceDirectionList: { label: string; value: SpaceProps['direction'] }[] = [
  { label: 'horizontal', value: 'horizontal' },
  { label: 'vertical', value: 'vertical' },
]
const spaceSizeList: { label: string; value: SpaceProps['size'] }[] = [
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const spaceAlignmentList: { label: string; value: SpaceProps['alignment'] }[] = [
  {
    label: 'center',
    value: 'center',
  },
  {
    label: 'flex-start',
    value: 'flex-start',
  },
  {
    label: 'flex-end',
    value: 'flex-end',
  },
  {
    label: 'start',
    value: 'start',
  },
  {
    label: 'end',
    value: 'end',
  },
]
const currentSize = ref<SpaceProps['size']>('default')
const customSize = ref<number>(20)
const isWrap = ref<SpaceProps['wrap']>(true)
const spacer = ref<string>('|')
const alignment = ref<SpaceProps['alignment']>('center')
const isFill = ref<SpaceProps['fill']>(true)
const fillRatio = ref<SpaceProps['fillRatio']>(30)
</script>

<template>
  <Story title="Basic/Space" icon="ic:twotone-space-bar">
    <Variant title="Basic usage">
      <el-space wrap>
        <el-button v-for="i in 3" :key="i">
          button
        </el-button>
      </el-space>
    </Variant>
    <Variant title="Vertical layout">
      <el-space :direction="currentDirection">
        <el-button v-for="i in 3" :key="i">
          button
        </el-button>
      </el-space>
      <template #controls>
        <HstRadio v-model="currentDirection" title="Direction" :options="spaceDirectionList" />
      </template>
    </Variant>
    <Variant title="Control the size of the gap">
      <el-space direction="vertical" alignment="start" :size="30">
        <el-space wrap :size="currentSize">
          <el-button v-for="i in 3" :key="i">
            button
          </el-button>
        </el-space>
      </el-space>
      <template #controls>
        <HstRadio v-model="currentSize" title="Size" :options="spaceSizeList" />
      </template>
    </Variant>
    <Variant title="Custom size">
      <el-space wrap :size="customSize">
        <el-button v-for="i in 3" :key="i">
          button
        </el-button>
      </el-space>
      <template #controls>
        <HstNumber v-model="customSize" title="Custom Size" />
      </template>
    </Variant>
    <Variant title="Wrap">
      <el-space :wrap="isWrap">
        <div v-for="i in 3" :key="i">
          <el-button text>
            Text button
          </el-button>
        </div>
      </el-space>
      <template #controls>
        <HstCheckbox v-model="isWrap" title="Wrap">
          Wrap
        </HstCheckbox>
      </template>
    </Variant>
    <Variant title="Separator">
      <el-space size="large" direction="vertical">
        <el-space size="default" :spacer="spacer">
          <div v-for="i in 2" :key="i">
            <el-button>button</el-button>
          </div>
        </el-space>
      </el-space>
      <template #controls>
        <HstText v-model="spacer" title="Separator" />
      </template>
    </Variant>
    <Variant title="Alignment">
      <div class="alignment-container">
        <el-space :alignment="alignment">
          string
          <el-button> button </el-button>
          <el-card>
            <template #header>
              header
            </template>
            body
          </el-card>
        </el-space>
      </div>
      <template #controls>
        <HstRadio v-model="alignment" title="Alignment" :options="spaceAlignmentList" />
      </template>
    </Variant>
    <Variant title="Fill container">
      <el-space :fill="isFill" wrap>
        <el-button v-for="i in 3" :key="i">
          button
        </el-button>
      </el-space>
      <template #controls>
        <HstCheckbox v-model="isFill" title="Fill" />
      </template>
    </Variant>
    <Variant title="fillRatio">
      <el-space
        fill
        wrap
        :fill-ratio="fillRatio"
        :direction="currentDirection"
        style="width: 100%"
      >
        <el-button v-for="i in 3" :key="i">
          button
        </el-button>
      </el-space>
      <template #controls>
        <HstNumber v-model="fillRatio" title="FillRatio" />
        <HstRadio v-model="currentDirection" title="Direction" :options="spaceDirectionList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage
The basic use case is using this component to provide unified space between each components

Using Space to provide space
</docs>
