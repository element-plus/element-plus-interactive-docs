<script setup lang="ts">
import type { MenuProps } from 'element-plus'
import {
  Location,
} from '@element-plus/icons-vue'

const basicData = reactive({
  mode: 'vertical' as MenuProps['mode'],
  defaultActive: 1,
  collapse: false,
  ellipsis: false,
  bgColor: '#FFF',
  textColor: '#303133',
  activeTextColor: '#409EFF',
  uniqueOpened: false,
  menuTrigger: 'hover' as MenuProps['menuTrigger'],
  router: false,
  collapseTransition: true,
  popperEffect: 'light' as MenuProps['popperEffect'],
})

const basicSource = computed(() => {
  return `<el-menu
  default-active="${basicData.defaultActive}"${isAttribute(
    basicData.mode === 'horizontal',
    'mode="horizontal"',
  )}${isAttribute(
    basicData.collapse && basicData.mode === 'vertical',
    'collapse',
  )}${isAttribute(
    basicData.ellipsis && basicData.mode === 'horizontal',
    ':ellipsis="false"',
  )}${isAttribute(
    basicData.bgColor !== '#FFF',
    `background-color="${basicData.bgColor}"`,
  )}${isAttribute(
    basicData.textColor !== '#303133',
    `text-color="${basicData.textColor}"`,
  )}${isAttribute(
    basicData.activeTextColor !== '#409EFF',
    `active-text-color="${basicData.activeTextColor}"`,
  )}${isAttribute(
    basicData.uniqueOpened,
    ':unique-opened="true"',
  )}${isAttribute(
    basicData.menuTrigger === 'click' && basicData.mode === 'horizontal',
    'menu-trigger="click"',
  )}${isAttribute(
    basicData.router,
    'router',
  )}${isAttribute(
    !basicData.collapseTransition,
    'collapse-transition="false"',
  )}${isAttribute(
    basicData.popperEffect === 'dark',
    'popper-effect="light"',
  )}
>
  <el-menu-item
    v-for="item in menuData"
    v-if="!item.children"
    :key="item.index"
    :index="item.index"
    :disabled="item.disabled"
  >
    <template #title>
      <span>{{ item.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu
    v-for="item in menuData"
    v-if="item.children"
    :key="item.index"
    :index="item.index"
    :disabled="item.disabled"
  >
    <template #title>
      {{ item.title }}
    </template>
    <el-menu-item
      v-for="child in item.children"
      :key="child.index"
      :index="child.index"
      :disabled="child.disabled"
    >
      <template #title>
        <span>{{ child.title }}</span>
      </template>
    </el-menu-item>
  </el-sub-menu>
<\/el-menu>

<script setup lang="ts">
const menuData = [
  {
    index: '1',
    title: 'Navigator One',
  },
  {
    index: '2',
    title: 'Workspace',
    children: [
      {
        index: '2-1',
        title: 'item one',
      },
      {
        index: '2-2',
        title: 'item two',
      },
      {
        index: '2-3',
        title: 'item three',
      },
      {
        index: '2-4',
        title: 'item four',
        children: [
          {
            index: '2-4-1',
            title: 'item one',
          },
          {
            index: '2-4-2',
            title: 'item two',
          },
          {
            index: '2-4-3',
            title: 'item three',
          },
        ],
      },
    ],
  },
  {
    index: '3',
    title: 'Info',
    disabled: true,
  },
  {
    index: '4',
    title: 'Orders',
  },
]
<\/script>
  `
})
</script>

<!-- icon from https://icones.js.org/collection/all?s=menu -->
<template>
  <Story
    title="Navigation/Menu"
    icon="bi:menu-button-wide-fill"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-col
        :span="
          basicData.mode === 'vertical' || basicData.ellipsis
            ? 12 : 100"
      >
        <el-menu
          :default-active="String(basicData.defaultActive)"
          :mode="basicData.mode"
          :collapse="basicData.collapse"
          :ellipsis="basicData.ellipsis"
          :background-color="basicData.bgColor"
          :text-color="basicData.textColor"
          :active-text-color="basicData.activeTextColor"
          :unique-opened="basicData.uniqueOpened"
          :menu-trigger="basicData.menuTrigger"
          :router="basicData.router"
          :collapse-transition="basicData.collapseTransition"
          :popper-effect="basicData.popperEffect"
        >
          <el-menu-item index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              Workspace
            </template>
            <el-menu-item index="2-1">
              item one
            </el-menu-item>
            <el-menu-item index="2-2">
              item two
            </el-menu-item>
            <el-menu-item index="2-3">
              item three
            </el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>
                item four
              </template>
              <el-menu-item index="2-4-1">
                item one
              </el-menu-item>
              <el-menu-item index="2-4-2">
                item two
              </el-menu-item>
              <el-menu-item index="2-4-3">
                item three
              </el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>
            Info
          </el-menu-item>
          <el-menu-item index="4">
            Orders
          </el-menu-item>
        </el-menu>
      </el-col>
      <template #controls>
        <HstInputNumber
          v-model="basicData.defaultActive"
          title="default-active"
          :min="1" :max="4"
        />
        <HstButtonGroup
          v-model="basicData.mode"
          title="mode"
          :options="[
            { label: 'vertical', value: 'vertical' },
            { label: 'horizontal', value: 'horizontal' },
          ]"
        />
        <HstCheckbox
          v-model="basicData.collapse"
          :style="useElDisplay(basicData.mode === 'vertical')"
          title="collapse"
        />
        <HstCheckbox
          v-model="basicData.ellipsis"
          :style="useElDisplay(basicData.mode === 'horizontal')"
          title="ellipsis"
        />
        <HstCheckbox
          v-model="basicData.uniqueOpened"
          title="unique-opened"
        />
        <HstButtonGroup
          v-model="basicData.menuTrigger"
          :style="useElDisplay(basicData.mode === 'horizontal')"
          title="menu-trigger"
          :options="[
            { label: 'hover', value: 'hover' },
            { label: 'click', value: 'click' },
          ]"
        />
        <HstCheckbox
          v-model="basicData.router"
          title="router"
        />
        <HstCheckbox
          v-model="basicData.collapseTransition"
          title="collapse-transition"
        />
        <HstButtonGroup
          v-model="basicData.popperEffect"
          title="popper-effect"
          :options="[
            { label: 'light', value: 'light' },
            { label: 'dark', value: 'dark' },
          ]"
        />
        <HstDivider content="Color" />
        <HstColor v-model="basicData.bgColor" title="bg-color" />
        <HstColor v-model="basicData.textColor" title="text-color" />
        <HstColor v-model="basicData.activeTextColor" title="active-text-color" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
