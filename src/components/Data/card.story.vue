<script setup lang="ts">
import { ref } from 'vue'
import type { CardProps } from 'element-plus'

const header = ref('Card Name')
const currentDate = new Date()
const bodyStyle = ref<CardProps['bodyStyle']>({ padding: '0px' })
const currentShadow = ref<CardProps['shadow']>('always')

const shadowTypeList: Record<'label' & 'value', CardProps['shadow']>[] = [
  {
    label: 'always',
    value: 'always',
  },
  {
    label: 'hover',
    value: 'hover',
  },
  {
    label: 'never',
    value: 'never',
  },
]
</script>

<template>
  <Story
    title="Data/Card"
    :layout="{
      type: 'grid',
      width: 540,
    }"
    icon="mdi:card-account-details-outline"
  >
    <Variant title="Basic usage">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>
              Operation button
            </el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ `List item ${o}` }}
        </div>
      </el-card>
    </Variant>

    <Variant title="Simple card">
      <el-card class="box-card" :header="header">
        <div v-for="o in 4" :key="o" class="text item">
          {{ `List item ${o}` }}
        </div>
      </el-card>

      <template #controls>
        <HstText v-model="header" title="Card Header" />
      </template>
    </Variant>

    <Variant title="With images">
      <el-row>
        <el-col
          v-for="(o, index) in 2"
          :key="o"
          :span="8"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="bodyStyle">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            >
            <div style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time"> {{ currentDate }} </time>
                <el-button text class="button">
                  Operating
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <template #controls>
        <HstJson
          v-model="bodyStyle"
          title="Body Style"
        />
      </template>
    </Variant>

    <Variant title="Shadow">
      <el-card :shadow="currentShadow">
        {{ currentShadow }}
      </el-card>

      <template #controls>
        <HstRadio v-model="currentShadow" title="Shadow" :options="shadowTypeList" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Card includes title, content and operations.

Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.

## Simple card

The header part can be omitted.

## With images

Display richer content by adding some configs.

The `body-style` attribute defines CSS style of custom `body`. This example also uses `el-col` for layout.

## Shadow

You can define when to show the card shadows

The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.
</docs>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.el-card {
  margin: 10px;
}
</style>
