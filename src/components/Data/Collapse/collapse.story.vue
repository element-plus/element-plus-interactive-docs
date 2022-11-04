<script setup lang="ts">
import { isAttribute } from '@/utils'

const activeNames = ref(['1'])
const accordion = ref(false)
const firstCollapseItem = reactive({
  title: 'Consistency',
  disabled: false,
})
const secondCollapseItem = reactive({
  title: 'Feedback',
  disabled: false,
})
const source = computed(() => {
  return `<script setup lang="ts">
const activeNames = ref(['1'])
<\/script>

<template>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        title="${firstCollapseItem.title}"
        name="1"${
        isAttribute(
    firstCollapseItem.disabled,
    '      disabled',
)}
      >
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </el-collapse-item>
      <el-collapse-item
        title="${firstCollapseItem.title}"
        name="2"${
        isAttribute(
    firstCollapseItem.disabled,
    '      disabled',
)}
      >
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </el-collapse-item>
    </el-collapse>
</template>
`
})
</script>

<template>
  <Story title="Data/Collapse" icon="mdi:collapse-all">
    <Variant
      title="Basic Usage"
      :source="source"
    >
      <el-collapse
        v-model="activeNames"
        :accordion="accordion"
      >
        <el-collapse-item
          :title="firstCollapseItem.title"
          :disabled="firstCollapseItem.disabled"
          name="1"
        >
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </el-collapse-item>
        <el-collapse-item
          :title="secondCollapseItem.title"
          :disabled="secondCollapseItem.disabled"
          name="2"
        >
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </el-collapse-item>
      </el-collapse>
      <template #controls>
        <HstCheckbox v-model="accordion" title="Accordion" />
        <el-divider border-style="dotted" content-position="left">
          <span>First Collapse Item</span>
        </el-divider>
        <HstText v-model="firstCollapseItem.title" title="Title" />
        <HstCheckbox v-model="firstCollapseItem.disabled" title="Disable" />
        <el-divider border-style="dotted" content-position="left">
          <span>Second Collapse Item</span>
        </el-divider>
        <HstText v-model="secondCollapseItem.title" title="Title" />
        <HstCheckbox v-model="secondCollapseItem.disabled" title="Disable" />
      </template>
    </Variant>
  </Story>
</template>
