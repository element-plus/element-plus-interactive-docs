<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import { isAttribute } from '@utils'
import { linkTypeList } from './constants'
// basic usage
const basicLinkData = reactive({
  text: 'Link',
  type: 'default',
  disabled: false,
  underline: false,
})
const basicSource = computed(() => {
  return `<el-link${isAttribute(
    basicLinkData.type !== 'default',
    `type="${basicLinkData.type}"`,
  )}${isAttribute(
    basicLinkData.disabled,
    'disabled',
  )}${isAttribute(
    basicLinkData.underline,
    'underline',
  )}
>
  ${basicLinkData.text}
</el-link>`
})

// Icon usage
const iconLinkData = reactive({
  icon: shallowRef(Edit),
  text: 'Link',
  type: 'default',
  disabled: false,
  underline: false,
})
const iconSource = computed(() => {
  return `<script setup lang="ts">
import { ${iconLinkData.icon.name} } from '@element-plus/icons-vue'
<\/script>

<el-link
  :icon="${iconLinkData.icon.name}"${isAttribute(
    iconLinkData.type !== 'default',
    `type="${basicLinkData.type}"`,
  )}${isAttribute(
    iconLinkData.disabled,
    'disabled',
  )}${isAttribute(
    iconLinkData.underline,
    'underline',
  )}
>
  ${iconLinkData.text}
</el-link>`
})
</script>

<template>
  <Story title="Basic/Link" icon="ic:baseline-add-link">
    <Variant title="Basic Usage" :source="basicSource">
      <el-link
        :type="basicLinkData.type"
        :href="void 0"
        :disabled="basicLinkData.disabled"
        :underline="basicLinkData.underline"
      >
        {{ basicLinkData.text }}
      </el-link>
      <template #controls>
        <HstText v-model="basicLinkData.text" title="Text" />
        <HstRadio v-model="basicLinkData.type" title="Link Type" :options="linkTypeList" />
        <HstCheckbox
          v-model="basicLinkData.underline"
          title="Underline"
        />
        <HstCheckbox
          v-model="basicLinkData.disabled"
          title="Disabled"
        />
      </template>
    </Variant>
    <Variant title="Icon" :source="iconSource" icon="line-md:iconify2">
      <el-link
        :icon="iconLinkData.icon"
        :type="iconLinkData.type"
        :href="void 0"
        :disabled="iconLinkData.disabled"
        :underline="iconLinkData.underline"
      >
        {{ iconLinkData.text }}
      </el-link>
      <template #controls>
        <HstText v-model="iconLinkData.text" title="Text" />
        <HstRadio v-model="iconLinkData.type" title="Link Type" :options="linkTypeList" />
        <HstCheckbox
          v-model="iconLinkData.underline"
          title="Underline"
        />
        <HstCheckbox
          v-model="iconLinkData.disabled"
          title="Disabled"
        />
      </template>
    </Variant>
  </Story>
</template>
