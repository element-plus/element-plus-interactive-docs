<script setup lang="ts">
import { justifyOptions } from './constants'
// Basic Usage
const basicData = reactive({
  span: 6,
  gutter: 0,
  offset: 0,
  justify: 'start',
  align: 'top',
  push: 0,
  pull: 0,
})
</script>

<template>
  <Story
    title="Basic/Layout"
    icon="lucide:layout-dashboard"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant title="Basic Usage">
      <el-row
        :gutter="basicData.gutter"
        :justify="basicData.justify"
      >
        <el-col
          v-for="item in 4"
          :key="item"
          :span="basicData.span"
          :offset="basicData.offset"
          :push="basicData.push"
          :pull="basicData.pull"
        >
          <div
            class="grid-item"
            :class="item % 2 ? 'grid-item-dark' : 'grid-item-light'"
          />
        </el-col>
      </el-row>
      <template #controls>
        <HstSlider
          v-model="basicData.gutter"
          title="Gutter"
          :min="0"
          :max="60"
        />
        <HstSlider
          v-model="basicData.span"
          title="Span"
          :min="0"
          :max="24"
        />
        <HstSlider
          v-model="basicData.offset"
          title="Offset"
          :min="0"
          :max="24"
        />
        <HstSlider
          v-model="basicData.push"
          title="Push"
          :min="0"
          :max="24"
        />
        <HstSlider
          v-model="basicData.pull"
          title="Pull"
          :min="0"
          :max="24"
        />
        <HstRadio
          v-model="basicData.justify"
          title="Justify"
          :options="justifyOptions"
        />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss">
.el-col {
  margin-bottom: 10px;
}

.grid-item{
  min-height: 36px;
}

.grid-item-light {
  background: #d3dce6;
}
.grid-item-dark {
  background: #e5e9f2;
}
</style>
