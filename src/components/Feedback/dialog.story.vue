<script setup lang="ts">
import { ref } from 'vue'
import type { DialogProps } from 'element-plus'

type OriginDialogProps = {
  -readonly[key in keyof DialogProps]: DialogProps[key]
}

type CustomDialogProps = Pick<OriginDialogProps, 'title' | 'draggable' | 'center' | 'alignCenter' | 'destroyOnClose'> & {
  header: string
  content: string
  footer: string
}

const dialogVisible = ref(false)
const dialogCustomVisible = ref(false)
const outerVisible = ref(false)
const innerVisible = ref(false)

const dialogData = ref<CustomDialogProps>({
  title: 'Title',
  draggable: false,
  center: false,
  alignCenter: false,
  destroyOnClose: false,
  header: 'custom header',
  content: 'custom content',
  footer: 'custom footer',
})
</script>

<template>
  <Story title="Feedback/Dialog" icon="ri:message-3-line">
    <Variant title="Basic Usage">
      <el-button @click="dialogVisible = true">
        click to open the Dialog
      </el-button>
      <Teleport to="#app">
        <el-dialog
          v-model="dialogVisible"
          :title="dialogData.title"
          :align-center="dialogData.alignCenter"
          :center="dialogData.center"
          :draggable="dialogData.draggable"
          width="30%"
        >
          <span>This is a message</span>
          <template #footer>
            <span>
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
          </template>
        </el-dialog>
      </Teleport>
    </Variant>

    <Variant title="Customized">
      <el-button @click="dialogCustomVisible = true">
        open a Customized Dialog
      </el-button>
      <Teleport to="#app">
        <el-dialog
          v-model="dialogCustomVisible"
          :title="dialogData.title"
          :align-center="dialogData.alignCenter"
          :center="dialogData.center"
          :draggable="dialogData.draggable"
        >
          <template #header>
            {{ dialogData.header }}
          </template>
          {{ dialogData.content }}
          <template #footer>
            {{ dialogData.footer }}
          </template>
        </el-dialog>
      </Teleport>
      <template #controls>
        <HstText v-model="dialogData.header" title="header" />
        <HstText v-model="dialogData.content" title="default" />
        <HstText v-model="dialogData.footer" title="footer" />
      </template>
    </Variant>

    <Variant title="Nested Dialog">
      <el-button @click="outerVisible = true">
        open the outer Dialog
      </el-button>
      <Teleport to="#app">
        <el-dialog v-model="outerVisible" title="Outer Dialog">
          <template #default>
            <el-dialog
              v-model="innerVisible"
              width="30%"
              title="Inner Dialog"
              :append-to-body="true"
            />
          </template>
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="outerVisible = false">
                Cancel
              </el-button>
              <el-button type="primary" @click="innerVisible = true">
                open the inner Dialog
              </el-button>
            </div>
          </template>
        </el-dialog>
      </Teleport>
    </Variant>

    <template #controls>
      <HstText v-model="dialogData.title" title="title" />
      <HstCheckbox v-model="dialogData.alignCenter" title="align-center" />
      <HstCheckbox v-model="dialogData.center" title="center" />
      <HstCheckbox v-model="dialogData.draggable" title="draggable" />
      <HstCheckbox v-model="dialogData.destroyOnClose" title="destroyOnClose" />
    </template>
  </Story>
</template>

<docs lang="md">
## Basic usage
Dialog pops up a dialog box, and it's quite customizable.
</docs>

<style>
</style>
