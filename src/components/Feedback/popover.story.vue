<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'
const visible = ref(false)
const popoverRef = ref()
const buttonRef = ref()
const placement = ref('top-start')
const trigger = ref('click')
const gridData: { date: string; name: string; address: string }[] = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]

const placementList: { label: string; value: string }[] = [
  {
    label: 'top',
    value: 'top',
  },
  {
    label: 'top-start',
    value: 'top-start',
  },
  {
    label: 'top-end',
    value: 'top-end',
  },
  {
    label: 'bottom',
    value: 'bottom',
  },
  {
    label: 'bottom-start',
    value: 'bottom-start',
  },
  {
    label: 'bottom-end',
    value: 'bottom-end',
  },
  {
    label: 'right',
    value: 'right',
  },
  {
    label: 'right-start',
    value: 'right-start',
  },
  {
    label: 'right-end',
    value: 'right-end',
  },
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'left-start',
    value: 'left-start',
  },
  {
    label: 'left-end',
    value: 'left-end',
  },
]

const triggerList: { label: string; value: string }[] = [
  {
    label: 'click',
    value: 'click',
  },
  {
    label: 'focus',
    value: 'focus',
  },
  {
    label: 'hover',
    value: 'hover',
  },
  {
    label: 'contextmenu',
    value: 'contextmenu',
  },
]

const onClickOutside = () => {
  unref(popoverRef).popoverRef?.delayHide?.()
}
</script>

<template>
  <Story title="Feedback/Popover" :layout="{ type: 'grid', width: 500 }">
    <Variant title="Basic Usage">
      <el-popover
        :placement="placement"
        title="Title"
        :width="200"
        :trigger="trigger"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>{{ trigger }} to activate</el-button>
        </template>
      </el-popover>

      <template #controls>
        <HstSelect
          v-model="placement"
          title="Placement"
          :options="placementList"
        />
        <HstSelect
          v-model="trigger"
          title="Trigger"
          :options="triggerList"
        />
      </template>
    </Variant>

    <Variant title="Virtual triggering">
      <el-button ref="buttonRef" v-click-outside="onClickOutside">
        Click me
      </el-button>

      <el-popover
        ref="popoverRef"
        :virtual-ref="buttonRef"
        trigger="click"
        title="With title"
        virtual-triggering
      >
        <span> Some content </span>
      </el-popover>
    </Variant>

    <Variant title="Rich content">
      <div style="display: flex; align-items: center">
        <el-popover placement="right" :width="400" trigger="click">
          <template #reference>
            <el-button style="margin-right: 16px">
              Click to activate
            </el-button>
          </template>
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="date" />
            <el-table-column width="100" property="name" label="name" />
            <el-table-column width="300" property="address" label="address" />
          </el-table>
        </el-popover>

        <el-popover
          :width="300"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        >
          <template #reference>
            <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
          </template>
          <template #default>
            <div
              class="demo-rich-conent"
              style="display: flex; gap: 16px; flex-direction: column"
            >
              <el-avatar
                :size="60"
                src="https://avatars.githubusercontent.com/u/72015883?v=4"
                style="margin-bottom: 8px"
              />
              <div>
                <p
                  class="demo-rich-content__name"
                  style="margin: 0; font-weight: 500"
                >
                  Element Plus
                </p>
                <p
                  class="demo-rich-content__mention"
                  style="margin: 0; font-size: 14px; color: var(--el-color-info)"
                >
                  @element-plus
                </p>
              </div>

              <p class="demo-rich-content__desc" style="margin: 0">
                Element Plus, a Vue 3 based component library for developers,
                designers and product managers
              </p>
            </div>
          </template>
        </el-popover>
      </div>
    </variant>

    <Variant title="Nested operation">
      <el-popover :visible="visible" placement="top" :width="160">
        <p>Are you sure to delete this?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible = false">
            cancel
          </el-button>
          <el-button size="small" type="primary" @click="visible = false">
            confirm
          </el-button>
        </div>
        <template #reference>
          <el-button @click="visible = true">
            Delete
          </el-button>
        </template>
      </el-popover>
    </Variant>

    <Variant title="Directive">
      <el-button v-popover="popoverRef" v-click-outside="onClickOutside">
        Click me
      </el-button>

      <el-popover
        ref="popoverRef"
        trigger="click"
        title="With title"
        virtual-triggering
        persistent
      >
        <span> Some content </span>
      </el-popover>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Similar to Tooltip, Popover is also built with `ElPopper`.
So for some duplicated attributes, please refer to the documentation of Tooltip.

The trigger attribute is used to define how popover is triggered: `hover`, `click`, `focus` or `contextmenu` .
If you want to manually controll it, you can set `:visible`.

## Virtual triggering

Like Tooltip, Popover can be triggered by virtual elements, if your use case includes separate the triggering element
and the content element, you should definitely use the mechanism, normally we use `#reference` to place our triggering element,
with `triggering-element` API you can set your triggering element anywhere you like, but notice that the triggering element
should be an element that accepts `mouse` and `keyboard` event.

## Rich content

Other components/elements can be nested in popover. Following is an example of nested table.

replace the `content` attribute with a default `slot`.

## Nested operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

## Directive

You can still using popover in directive way but this is **not recommended** anymore since this makes your application complicated,
you may refer to the virtual triggering for more information.
</docs>
