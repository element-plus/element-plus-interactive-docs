<script setup lang="ts">
import { logEvent } from 'histoire/client'
import { ref } from 'vue'
import type { CascaderOption, CascaderProps } from 'element-plus'

const value1 = ref([])
const value2 = ref([])
const props: CascaderProps = {
  expandTrigger: 'hover',
}
const multipleProps: CascaderProps = {
  multiple: true,
}
const singleSelectionProps: CascaderProps = {
  checkStrictly: true,
}
const multipleSelectionProps: CascaderProps = {
  multiple: true,
  checkStrictly: true,
}
let id = 0
const dynamicProps: CascaderProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }))
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes)
    }, 1000)
  },
}
const handleChange = (value: any) => {
  logEvent('change', value)
}

const options: CascaderOption[] = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
const disableOptions: CascaderOption[] = [
  {
    value: 'guide',
    label: 'Guide',
    disabled: true,
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
</script>

<template>
  <Story title="Form/Cascader">
    <Variant title="Basic Usage">
      <div class="example-block">
        <span class="example-demonstration">
          Child options expand when clicked (default)
        </span>
        <el-cascader
          v-model="value1"
          :options="options"
          @change="handleChange"
        />
      </div>
      <div class="example-block">
        <span class="example-demonstration">
          Child options expand when hovered
        </span>
        <el-cascader
          v-model="value2"
          :options="options"
          :props="props"
          @change="handleChange"
        />
      </div>
    </Variant>
    <Variant title="Disable option">
      <el-cascader
        v-model="value1"
        :options="disableOptions"
        @change="handleChange"
      />
    </Variant>
    <Variant title="Clearable">
      <el-cascader :options="options" clearable />
    </Variant>
    <Variant title="Display only the last level">
      <el-cascader :options="options" :show-all-levels="false" />
    </Variant>
    <Variant title="Multiple Selection">
      <el-cascader :props="multipleProps" :options="options" />
    </Variant>
    <Variant title="Select any level of options">
      <div class="example-block">
        <span class="example-demonstration">
          Select any level of options (Single selection)
        </span>
        <el-cascader
          :options="options"
          :props="singleSelectionProps"
          clearable
        />
      </div>
      <div class="example-block">
        <span class="example-demonstration">
          Select any level of options (Multiple selection)
        </span>
        <el-cascader
          :options="options"
          :props="multipleSelectionProps"
          clearable
        />
      </div>
    </Variant>
    <Variant title="Dynamic loading">
      <el-cascader :props="dynamicProps" />
    </Variant>
    <Variant title="Filterable">
      <div class="example-block">
        <span class="example-demonstration">Filterable (Single selection)</span>
        <el-cascader
          placeholder="Try searchingL Guide"
          :options="options"
          filterable
        />
      </div>
      <div class="example-block">
        <span class="example-demonstration">
          Filterable (Multiple selection)
        </span>
        <el-cascader
          placeholder="Try searchingL Guide"
          :options="options"
          :props="props"
          filterable
        />
      </div>
    </Variant>
    <Variant title="Custom option content">
      <el-cascader :options="options">
        <template #default="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf">({{ data.children.length }})</span>
        </template>
      </el-cascader>
    </Variant>
    <Variant title="Cascader panel">
      <el-cascader-panel :options="options" />
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic Usage
There are two ways to expand child option items.

Assigning the `options` attribute to an array of options renders a Cascader. The `props.expandTrigger` attribute defines how child options are expanded.
## Disable option
Disable an option by setting a `disabled` field in the option object.

In this example, the first item in `options` array has a `disabled: true` field, so it is `disabled`. By default, Cascader checks the disabled field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the `props.disabled` attribute (see the API table below for details). And of course, field name `value`, `label` and `children` can also be customized in the same way.
## Clearable
Set `clearable` attribute for `el-cascader` and a clear icon will appear when selected and hovered
## Disaplay only last level
The input can display only the last level instead of all levels.

The `show-all-levels` attribute defines if all levels are displayed. If it is `false`, only the last level is displayed.
## Multiple Selection
Add :props="props" in tag and set data props = { multiple: true } to use multiple selection.

## Select any level of options
In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.

Set `props.checkStrictly = true` to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.

## Dynamic loading
Dynamic load its child nodes when checked a node.

Set `lazy = true` to use dynamic loading, and you have to specify how to load the data source by `lazyload`. There are two parameters of `lazyload`,the first parameter `node` is the node currently clicked, and the `resolve` is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a `leaf` field (can be modified by `props.leaf`) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.
## Filterable
Search and select options with a keyword.

Adding `filterable` to `el-cascader` enables filtering. Cascader will match nodes whose label or parent's label (according to `show-all-levels`) includes input keyword. Of course, you can customize search logic by `filter-method` which accepts a function, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.
## Custom option content
You can customize the content of cascader node.

You can customize the content of cascader node by `scoped slot`. You'll have access to `node` and `data` in the scope, standing for the Node object and node data of the current node respectively.

## Cascader panel
`CascaderPanel` is the core component of `Cascader` which has various of features such as single selection, multiple selection, dynamic loading and so on.

Just like `el-cascader`, you can set alternative `options` by options, and enable other features by `props`, see the API form below for details.
</docs>
