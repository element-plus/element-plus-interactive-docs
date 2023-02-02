<script setup lang="ts">
import type { TypeOptions } from '@/constants/typeOptions'
import typeOptions from '@/constants/typeOptions'
import sizeOptions from '@/constants/sizeOptions'
import type { PlacementOptions } from '@/constants/placementOptions'
import placementOptions from '@/constants/placementOptions'

const basicData = reactive({
  split: true,
  type: '' as TypeOptions,
  size: 'default',
  disabled: false,
  placement: 'bottom' as PlacementOptions,
  trigger: 'hover' as 'hover' | 'click',
  hideOnClick: true,
  showTimeout: 250,
  hideTimeout: 150,
  item: {
    disabled: true,
    divided: true,
  },
})

const basicSource = computed(() => {
  return `<el-dropdown${isAttribute(
    basicData.split,
    ':split-button="true"',
  )}${isAttribute(
    basicData.split && basicData.type !== '',
    `type="${basicData.type}"`,
  )}${isAttribute(
    basicData.split && basicData.size !== 'default',
    `size="${basicData.size}"`,
  )}${isAttribute(
    basicData.disabled,
    ':disabled="true"',
  )}${isAttribute(
    basicData.placement !== 'bottom',
    `placement="${basicData.placement}"`,
  )}${isAttribute(
    basicData.trigger !== 'hover',
    `trigger="${basicData.trigger}"`,
  )}${isAttribute(
    basicData.trigger === 'hover' && basicData.showTimeout !== 250,
    `:show-timeout="${basicData.showTimeout}"`,
  )}${isAttribute(
    basicData.trigger === 'hover' && basicData.hideTimeout !== 150,
    `:hide-timeout="${basicData.hideTimeout}"`,
  )}${isAttribute(
    !basicData.hideOnClick,
    ':hide-on-click="false"',
  )}
>
  Dropdown List
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item${basicData.item.disabled ? ' disabled' : ''}>
        Action 4
      </el-dropdown-item>
      <el-dropdown-item${basicData.item.divided ? ' divided' : ''}>
        Action 5
      </el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>`
})
</script>

<template>
  <Story title="Navigation/Dropdown" icon="carbon:list-dropdown">
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-dropdown
        :split-button="basicData.split"
        :type="basicData.type"
        :size="basicData.size"
        :disabled="basicData.disabled"
        :placement="basicData.placement"
        :trigger="basicData.trigger"
        :hide-on-click="basicData.hideOnClick"
        :show-timeout="basicData.showTimeout"
        :hide-timeout="basicData.hideTimeout"
      >
        Dropdown List
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item :disabled="basicData.item.disabled">
              Action 4
            </el-dropdown-item>
            <el-dropdown-item :divided="basicData.item.divided">
              Action 5
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <template #controls>
        <HstCheckbox
          v-model="basicData.split"
          title="split-button"
        />
        <div :style="useElDisplay(basicData.split, 'block')">
          <HstSelect
            v-model="basicData.type"
            :options="typeOptions"
            title="type"
          />
          <HstSelect
            v-model="basicData.size"
            :options="sizeOptions"
            title="size"
          />
        </div>
        <HstCheckbox
          v-model="basicData.disabled"
          title="disabled"
        />
        <HstSelect
          v-model="basicData.placement"
          :options="placementOptions"
          title="placement"
        />
        <HstSelect
          v-model="basicData.trigger"
          :options="['hover', 'click']"
          title="trigger"
        />
        <div :style="useElDisplay(basicData.trigger === 'hover', 'block')">
          <HstInputNumber
            v-model="basicData.showTimeout"
            title="showTimeout"
          />
          <HstInputNumber
            v-model="basicData.hideTimeout"
            title="hideTimeout"
          />
        </div>
        <HstCheckbox
          v-model="basicData.hideOnClick"
          title="hideOnClick"
        />
        <HstDivider content="dropdown-item" />
        <HstCheckbox
          v-model="basicData.item.disabled"
          title="item disabled"
        />
        <HstCheckbox
          v-model="basicData.item.divided"
          title="item divided"
        />
      </template>
    </Variant>
  </Story>
</template>
