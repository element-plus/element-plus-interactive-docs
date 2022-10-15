<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

const visible = ref(false)
const buttonRef = ref()
const popoverRef = ref()

const gridData = [
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

const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>

<template>
  <Story title="Feedback/Popover">
    <Variant title="Basic Usage">
      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Hover to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Click to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        ref="popover"
        placement="right"
        title="Title"
        :width="200"
        trigger="focus"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>Focus to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        ref="popover"
        title="Title"
        :width="200"
        trigger="contextmenu"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button>contextmenu to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        :visible="visible"
        placement="bottom"
        title="Title"
        :width="200"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <el-button @click="visible = !visible">
            Manual to activate
          </el-button>
        </template>
      </el-popover>
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
