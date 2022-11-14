import { resolve } from 'pathe'
import { lowerFirst } from 'script/utils'
export const PROJECT_DIR = process.cwd()
export const resolver = (dir: string) => resolve(PROJECT_DIR, dir)

export const createStoryComponent = (category: CategoryType, component: ComponentType) => `\
<script setup lang="ts">
// import type { ${component}Props } from 'element-plus'
</script>

<!-- icon from https://icones.js.org/collection/all?s=${lowerFirst(component)} -->
<template>
  <!-- <Story title="${category}/${component}" icon="ep:element-plus">
    <Variant
      title="Basic Usage"
    >
      <template #controls>
        HstControls
      </template>
    </Variant>
  </Story> -->
</template>

<style scoped>
</style>
`

export const createStoryMd = (component: ComponentType) => `\
## ${component} Attributes
`

export const componentCollection = {
  Basic: {
    components: [
      'Button',
      'Border',
      'Color',
      'Container',
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
} as const
export type CategoryType = keyof typeof componentCollection
export type ComponentType = typeof componentCollection[CategoryType]['components'][number]
export const categoryList = Object.keys(componentCollection) as [CategoryType]

