<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ElInput } from 'element-plus'
import type { TagProps } from 'element-plus'
import { logEvent } from 'histoire/client'

const currentType = ref('success')
const closable = ref(true)
const rounded = ref(true)
const disableTransitions = ref(true)
const tagTypeList: Record<'label' & 'value', TagProps['type']>[] = [
  {
    label: 'default',
    value: '',
  },
  {
    label: 'success',
    value: 'success',
  },
  {
    label: 'warning',
    value: 'warning',
  },
  {
    label: 'error',
    value: 'error',
  },
  {
    label: 'info',
    value: 'info',
  },
]
const currentSize = ref<TagProps['size']>('large')
const tagSizeList: Record<'label' & 'value', TagProps['size']>[] = [
  {
    label: 'large',
    value: 'large',
  },
  {
    label: 'default',
    value: 'default',
  },
  {
    label: 'small',
    value: 'small',
  },
]
const ThemeList = [
  {
    label: 'Dark Theme',
    value: 'dark',
  },
  {
    label: 'Light Theme',
    value: 'light',
  },
  {
    label: 'Plain Theme',
    value: 'plain',
  },
]
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const currentTheme = ref<TagProps['effect']>('light')
const inputValue = ref('')
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value)
    dynamicTags.value.push(inputValue.value)

  inputVisible.value = false
  inputValue.value = ''
}
const fireClose = (e: Event) => {
  logEvent('close', e)
}
const checked = ref(false)
const onChange = (status: boolean) => {
  checked.value = status
}
</script>

<template>
  <Story title="Data/Tag">
    <Variant title="Basic usage">
      <el-tag :type="currentType" :size="currentSize">
        Tag
      </el-tag>
      <template #controls>
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />
        <HstRadio v-model="currentSize" title="Tag Sizes" :options="tagSizeList" />
      </template>
    </Variant>
    <Variant title="Removable Tag">
      <el-tag :closable="closable" :type="currentType" :disable-transitions="disableTransitions" @close="fireClose">
        Removable Tag
      </el-tag>
      <template #controls>
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />
        <HstCheckbox v-model="closable" title="closable" />
        <HstCheckbox v-model="disableTransitions" title="disableTransitions" />
      </template>
    </Variant>
    <Variant title="Edit Dynamically">
      <el-tag v-for="tag in dynamicTags" :key="tag" :closable="closable" :disable-transitions="disableTransitions" style="margin:0 5px;" @close="handleClose(tag)">
        {{ tag }}
      </el-tag>
      <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" style="margin-left:10px;width:120px;" size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
      <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
        + New Tag
      </el-button>
      <template v-if="dynamicTags.length > 0" #controls>
        <HstCheckbox v-model="closable" title="closable" />
        <HstCheckbox v-model="disableTransitions" title="disableTransitions" />
      </template>
    </Variant>
    <Variant title="Theme">
      <el-tag :type="currentType" :effect="currentTheme">
        Tag
      </el-tag>
      <template #controls>
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />
        <HstButtonGroup
          v-model="currentTheme" title="Theme" :options="ThemeList"
        />
      </template>
    </Variant>
    <Variant title="Rounded">
      <el-tag :type="currentType" :effect="currentTheme" :round="rounded">
        Tag
      </el-tag>
      <template #controls>
        <HstRadio v-model="currentType" title="Tag Type" :options="tagTypeList" />
        <HstButtonGroup
          v-model="currentTheme" title="Theme" :options="ThemeList"
        />
        <HstCheckbox v-model="rounded" title="rounded" />
      </template>
    </Variant>
    <Variant title="Checkable tag">
      <el-check-tag checked style="margin-right: 8px">
        Checked
      </el-check-tag>
      <el-check-tag :checked="checked" @change="onChange">
        Toggle me
      </el-check-tag>
      <template #controls>
        <HstCheckbox v-model="checked" title="checked" />
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
## Basic usage

Tag usage

## Removable Tag

closable attribute can be used to define a removable tag. It accepts a Boolean. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the disable-transitions attribute, which accepts a Boolean, to true. close event triggers when Tag is removed.

## Edit Dynamically

You can use the close event to add and remove tag dynamically.

## Theme

Tag provide three different themes: dark、light and plain

Using effect to change, default is light

## Checkable tag

Sometimes because of the business needs, we might need checkbox like tag, but button like checkbox cannot meet our needs, here comes check-tag

basic check-tag usage, the API is rather simple.
</docs>

