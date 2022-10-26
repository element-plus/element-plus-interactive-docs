<script setup lang="ts">
import sizeOptions from '@constants/sizeOptions'
import { isAttribute } from '@utils'
import { logEvent } from 'histoire/client'
import { Search } from '@element-plus/icons-vue'
import { typeList } from './constants'

// Basic-Button
const basicButtonData = reactive({
  text: 'Button',
  type: '',
  typeList,
  size: 'default',
  sizeOptions,
  plain: false,
  round: false,
  circle: false,
  loading: false,
  disabled: false,
})

const basicSource = computed(() => {
  return `<el-button${isAttribute(
    basicButtonData.type !== '',
    `type="${basicButtonData.type}"`,
  )}${isAttribute(
    basicButtonData.size !== 'default',
    `size="${basicButtonData.size}"`,
  )}${isAttribute(
    basicButtonData.plain,
    'plain',
  )}${isAttribute(
    basicButtonData.round,
    'round',
  )}${isAttribute(
    basicButtonData.circle,
    'circle',
  )}${isAttribute(
    basicButtonData.loading,
     'loading',
  )}${isAttribute(
    basicButtonData.disabled,
    'disabled',
  )}
  @click="console.log('Button is clicked')"
>
  ${basicButtonData.text}
</el-button>`
})

// Icon Button
const iconButtonData = reactive({
  icon: shallowRef(Search),
  text: '',
  type: '',
  typeList,
  size: 'default',
  sizeOptions,
  circle: true,
  plain: false,
  loading: false,
  disabled: false,
})
const iconSource = computed(() => {
  return `<script setup lang="ts">
import { ${iconButtonData.icon.name} } from '@element-plus/icons-vue'
<\/script>

<el-button
  :icon="${iconButtonData.icon.name}"${isAttribute(
    iconButtonData.type !== '',
    `type="${iconButtonData.type}"`,
  )}${isAttribute(
    iconButtonData.size !== 'default',
    `size="${iconButtonData.size}"`,
  )}${isAttribute(
    iconButtonData.plain,
    'plain',
  )}${isAttribute(
    iconButtonData.circle,
    'circle',
  )}${isAttribute(
    iconButtonData.loading,
     'loading',
  )}${isAttribute(
    iconButtonData.disabled,
    'disabled',
  )}
  @click="console.log('Button is clicked')"
>${isAttribute(Boolean(iconButtonData.text), iconButtonData.text)}
</el-button>
`
})

// Color Button
const colorButtonData = reactive({
  text: 'Custom Color Button',
  color: '#626aef',
  plain: false,
  disabled: false,
})

const ColorSource = computed(() => {
  return `<el-button${isAttribute(
    true,
    `color="${colorButtonData.color}"`,
  )}${isAttribute(
    colorButtonData.plain,
    'plain',
  )}${isAttribute(
    colorButtonData.disabled,
    'disabled',
  )}
  @click="console.log('Button is clicked')"
>
  ${colorButtonData.text}
</el-button>`
})

// Button Group
const buttonGroupData = reactive({
  type: '',
  typeList,
  size: 'default',
  sizeOptions,
})

const buttonGroupSource = computed(() => {
  return `<el-button-group${isAttribute(
    buttonGroupData.type !== '',
    `type="${buttonGroupData.type}"`,
  )}${isAttribute(
    buttonGroupData.size !== 'default',
    `size="${buttonGroupData.size}"`,
  )}
>
  <el-button>Previous Page</el-button>
  <el-button>Next Page</el-button>
</el-button-group>`
})
</script>

<template>
  <Story title="Basic/Button" icon="teenyicons:button-outline">
    <Variant title="Basic usage" :source="basicSource">
      <el-button
        :type="basicButtonData.type"
        :size="basicButtonData.size"
        :plain="basicButtonData.plain"
        :round="basicButtonData.round"
        :disabled="basicButtonData.disabled"
        :loading="basicButtonData.loading"
        @click="logEvent('click', { log: 'Button is clicked' })"
      >
        {{ basicButtonData.text }}
      </el-button>
      <template #controls>
        <HstText v-model="basicButtonData.text" title="Text" />
        <HstCheckbox v-model="basicButtonData.plain" title="Plain" />
        <HstCheckbox v-model="basicButtonData.round" title="Round" />
        <HstCheckbox v-model="basicButtonData.disabled" title="Disabled" />
        <HstCheckbox v-model="basicButtonData.loading" title="Loading" />

        <HstRadio
          v-model="basicButtonData.type"
          title="Type"
          :options="basicButtonData.typeList"
        />
        <HstRadio
          v-model="basicButtonData.size"
          title="Size"
          :options="basicButtonData.sizeOptions"
        />
      </template>
    </Variant>
    <Variant title="Icon Button" :source="iconSource" icon="line-md:iconify2">
      <el-button
        :icon="iconButtonData.icon"
        :type="iconButtonData.type"
        :size="iconButtonData.size"
        :plain="iconButtonData.plain"
        :circle="iconButtonData.circle"
        :disabled="iconButtonData.disabled"
        :loading="iconButtonData.loading"
        @click="logEvent('click', { log: 'Button is clicked' })"
      >
        <template v-if="iconButtonData.text" #default>
          {{ iconButtonData.text }}
        </template>
      </el-button>
      <template #controls>
        <HstText v-model="iconButtonData.text" title="Text" />
        <HstCheckbox v-model="iconButtonData.plain" title="Plain" />
        <HstCheckbox v-model="iconButtonData.circle" title="Circle" />
        <HstCheckbox v-model="iconButtonData.disabled" title="Disabled" />
        <HstCheckbox v-model="iconButtonData.loading" title="Loading" />

        <HstRadio
          v-model="iconButtonData.type"
          title="Type"
          :options="iconButtonData.typeList"
        />
        <HstRadio
          v-model="iconButtonData.size"
          title="Size"
          :options="iconButtonData.sizeOptions"
        />
      </template>
    </Variant>
    <Variant
      title="Custom Color"
      icon="ic:outline-color-lens"
      :source="ColorSource"
    >
      <el-button
        :plain="colorButtonData.plain"
        :disabled="colorButtonData.disabled"
        :color="colorButtonData.color"
        @click="logEvent('click', $event)"
      >
        {{ colorButtonData.text }}
      </el-button>
      <template #controls>
        <HstText v-model="colorButtonData.text" title="Text" />
        <span style="padding: 0 8px; font-size: 14px; margin-right: 68px;">
          Color:
        </span>
        <el-color-picker v-model="colorButtonData.color" size="small" />
        <HstCheckbox v-model="colorButtonData.plain" title="Plain" />
        <HstCheckbox v-model="colorButtonData.disabled" title="Disabled" />
      </template>
    </Variant>

    <Variant
      title="Button Group"
      icon="clarity:blocks-group-line"
      :source="buttonGroupSource"
    >
      <el-button-group
        :size="buttonGroupData.size"
        :type="buttonGroupData.type"
      >
        <el-button>
          Previous Page
        </el-button>
        <el-button>
          Next Page
        </el-button>
      </el-button-group>
      <template #controls>
        <HstRadio
          v-model="buttonGroupData.type"
          title="Type"
          :options="buttonGroupData.typeList"
        />
        <HstRadio
          v-model="buttonGroupData.size"
          title="Size"
          :options="buttonGroupData.sizeOptions"
        />
      </template>
    </Variant>
  </Story>
</template>
