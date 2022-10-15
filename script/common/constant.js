import { resolve } from 'pathe'
export const PROJECT_DIR = process.cwd()
export const resolver = dir => resolve(PROJECT_DIR, dir)
export const createStoryComponent = (category, component) => `\
<script setup lang="ts">
import type { ${component}Props } from 'element-plus'
</script>

<template>
  <Story title="${category}/${component}">
    <Variant title="Basic Usage">
      <template #controls>
        <!-- HstControl -->
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage
${component} usage
</docs>

<style>
</style>
`
export const componentCollection = {
  Basic: {
    components: [
      'Button',
      'Border',
      'Color',
      'LayoutContainer',
      'Icon',
      'Layout',
      'Link',
      'Scrollbar',
      'Space',
      'Typography',
    ],
  },
  Form: {
    components: [
      'Autocomplete',
      'Cascader',
      'Checkbox',
      'ColorPicker',
      'DatePicker',
      'DateTimePicker',
      'Form',
      'Input',
      'InputNumber',
      'Radio',
      'Rate',
      'Select',
      'VirtualizedSelect',
      'Slider',
      'Switch',
      'TimePicker',
      'TimeSelect',
      'Transfer',
      'Upload',
    ],
  },
  Data: {
    components: [
      'Avatar',
      'Badge',
      'Calendar',
      'Card',
      'Carousel',
      'Collapse',
      'Descriptions',
      'Empty',
      'Image',
      'InfiniteScroll',
      'Pagination',
      'Progress',
      'Result',
      'Skeleton',
      'Table',
      'VirtualizedTable',
      'Tag',
      'Timeline',
      'Tree',
      'TreeSelect',
      'VirtualizedTree',
    ],
  },
  Navigation: {
    components: [
      'Affix',
      'Backtop',
      'Breadcrumb',
      'Dropdown',
      'Menu',
      'PageHeader',
      'Steps',
      'Tabs',
    ],
  },
  Feedback: {
    components: [
      'Alert',
      'Dialog',
      'Drawer',
      'Loading',
      'Message',
      'MessageBox',
      'Notification',
      'Popconfirm',
      'Popover',
      'Tooltip',
    ],
  },
  Configuration: {
    components: ['ConfigProvider'],
  },
  Others: {
    components: ['Divider'],
  },
}
export const categoryList = Object.keys(componentCollection)
