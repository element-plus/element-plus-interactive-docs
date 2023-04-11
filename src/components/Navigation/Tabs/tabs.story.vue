<script setup lang="ts">
import type { TabsProps } from 'element-plus'

const basicData = reactive({
  activeName: 'first',
  type: '' as TabsProps['type'],
  closable: false,
  addable: false,
  editable: false,
  tabPosition: 'top' as TabsProps['tabPosition'],
  stretch: false,
})

const tabs = ref([
  {
    label: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    label: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
  {
    label: 'Tab 3',
    name: '3',
    content: 'Tab 3 content',
  },
])

const basicSource = computed(() => {
  return `<el-tabs
  v-model="activeName"${isAttribute(
    basicData.type !== '',
    `type="${basicData.type}"`,
  )}${isAttribute(
    basicData.closable,
    'closable',
  )}${isAttribute(
    basicData.addable,
    'addable',
  )}${isAttribute(
    basicData.editable,
    'editable',
  )}${isAttribute(
    basicData.tabPosition !== 'top',
    `tap-position="${basicData.tabPosition}"`,
  )}${isAttribute(
    basicData.stretch,
    'stretch',
  )}
>
  <el-tab-pane
    v-for="tab in tabs"
    :key="tab.name"
    :label="tab.label" :name="tab.name"
  >
    {{ tab.content }}
  </el-tab-pane>
</el-tabs>

<script setup lang="ts">
import {ref} from 'vue'

const activeName = ref('1')
const tabs = ref([
  {
    label: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    label: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
  {
    label: 'Tab 3',
    name: '3',
    content: 'Tab 3 content',
  },
])
<\/script>
`
})
</script>

<!-- icon from https://icones.js.org/collection/all?s=tabs -->
<template>
  <Story
    title="Navigation/Tabs"
    icon="ph:tabs-light"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant
      title="Basic Usage"
      :source="basicSource"
    >
      <el-tabs
        v-model="basicData.activeName"
        :type="basicData.type"
        :closable="basicData.closable"
        :addable="basicData.addable"
        :editable="basicData.editable"
        :tab-position="basicData.tabPosition"
        :stretch="basicData.stretch"
      >
        <el-tab-pane
          v-for="tab in tabs"
          :key="tab.name"
          :label="tab.label" :name="tab.name"
        >
          {{ tab.content }}
        </el-tab-pane>
      </el-tabs>
      <template #controls>
        <HstButtonGroup
          v-model="basicData.type"
          :options="[
            { label: 'Default', value: '' },
            { label: 'Card', value: 'card' },
            { label: 'Border Card', value: 'border-card' },
          ]"
          title="Type"
        />
        <HstCheckbox
          v-model="basicData.closable"
          title="Closable"
        />
        <HstCheckbox
          v-model="basicData.addable"
          title="Addable"
        />
        <HstCheckbox
          v-model="basicData.editable"
          title="Editable"
        />
        <HstButtonGroup
          v-model="basicData.tabPosition"
          :options="[
            { label: 'Top', value: 'top' },
            { label: 'Right', value: 'right' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
          ]"
          title="Tab Position"
        />
        <HstCheckbox
          v-model="basicData.stretch"
          title="Stretch"
        />
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
</style>
