<script setup lang="ts">
import sizeOptions from '@constants/sizeOptions'
import { computed, reactive } from 'vue'
import { groupOptions, selectOptions, templateSource, templateSourceGroup } from './constant'

const initState = reactive({
  value: '' as string | string[],
  size: '',
  disabled: false,
  clearable: false,
  filterable: false,
  allowCreate: false,
  multiple: false,
  multipleLimit: 0,
  placeholder: 'Select',
  defaultFirstOption: false,
  popperClass: '',
  reserveKeyword: false,
  valueKey: '',
  collapseTags: false,
  collapseTagsTooltip: false,
  popperAppendToBody: true,
  automaticDropdown: true,
})

const BasicSource = computed(() =>
    `
<el-select
  v-model="${initState.value}"
  :placeholder="${initState.placeholder}"
  :size="state.size"
  :disabled="state.disabled"
  :clearable="state.clearable"
>
  <el-option
    v-for="item in selectOptions"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled"
  />
</el-select>`,
)
</script>

<template>
  <Story title="Form/Select" icon="mi:select">
    <Variant
      title="Basic Usage"
      :init-state="() => initState"
      :source="BasicSource"
    >
      <template #default="{ state }">
        <el-select
          v-model="state.value"
          :placeholder="state.placeholder"
          :size="state.size"
          :disabled="state.disabled"
          :clearable="state.clearable"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.placeholder" title="Placeholder" />
        <HstRadio
          v-model="state.size"
          title="Size"
          :options="sizeOptions"
        />
        <HstCheckbox
          v-model="state.disabled"
          title="Disabled"
        />
        <HstCheckbox
          v-model="state.clearable"
          title="Clearable"
        />
      </template>
    </Variant>
    <Variant title="multiple select" :init-state="() => initState">
      <template #default="{ state }">
        <el-select
          v-model="state.value"
          multiple
          :collapse-tags="state.collapseTags"
          :collapse-tags-tooltip="state.collapseTagsTooltip"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #controls="{ state }">
        <HstCheckbox
          v-model="state.collapseTags"
          title="CollapseTags"
        />
        <HstCheckbox
          v-model="state.collapseTagsTooltip"
          title="TagsTooltip"
        />
      </template>
    </Variant>
    <Variant title="Option filtering" :init-state="() => initState">
      <template #default="{ state }">
        <el-select
          v-model="state.value"
          :filterable="state.filterable"
          :allow-create="state.allowCreate"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #controls="{ state }">
        <HstCheckbox
          v-model="state.filterable"
          title="Filterable"
        />
        <HstCheckbox
          v-model="state.allowCreate"
          title="AllowCreate"
        />
      </template>
    </Variant>
    <Variant title="Custom template" :init-state="() => initState" :source="templateSource">
      <template #default="{ state }">
        <el-select
          v-model="state.value"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span class="left-bar">{{ item.label }}</span>
            <span class="right-bar">{{ item.value }}</span>
          </el-option>
        </el-select>
      </template>
    </Variant>
    <Variant title="Grouping" :init-state="() => initState" :source="templateSourceGroup">
      <template #default="{ state }">
        <el-select v-model="state.value" placeholder="Select">
          <el-option-group
            v-for="group in groupOptions"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
      </template>
    </Variant>
  </Story>
</template>

<style scoped>
.left-bar {
  float: left;
}
.right-bar {
  float: right;
  color: var(--el-text-color-secondary);
  font-size: 13px;
}
</style>
